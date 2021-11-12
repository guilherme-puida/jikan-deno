import { Members } from './interfaces/club/members.ts';
import { ClubResponse } from './interfaces/club/club.ts';
import { ky, PQueue } from '../dep.ts';
import {
    AnimeResponse,
    CharactersStaff,
    Episodes,
    Forum,
    MoreInfo,
    News,
    Recommendations,
    Reviews,
    Stats,
    UserUpdates,
    Videos,
} from './interfaces/anime/anime.ts';
import { CharacterResponse } from './interfaces/character/character.ts';
import { Pictures } from './interfaces/pictures.ts';

const baseUrl = 'https://api.jikan.moe/v3';
const queue = new PQueue({
    concurrency: 4,
});

const api = ky.create({
    hooks: {
        beforeRequest: [
            (request: Request) =>
                console.log(
                    `Making request ${queue.pending} on url ${request.url}`,
                ),
        ],
        afterResponse: [
            (_request, _options, response: Response) => {
                console.log(`After response on url ${response.url}`);
            },
        ],
    },
    prefixUrl: baseUrl,
    retry: {
        limit: 2,
        methods: ['get'],
    },
    timeout: 10000,
    parseJson: (text: string) =>
        JSON.parse(text, (_, value) => {
            let a;
            if (typeof value === 'string') {
                a = /^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\+\d{2}:\d{2})$/.exec(
                    value,
                );
                if (a) {
                    return new Date(a[1]);
                }
            }
            return value;
        }),
});

async function makeRequest<T>(url: string): Promise<T> {
    const response = await queue.add(() => api.get(url));
    return response.json() as Promise<T>;
}

abstract class Anime {
    public static async getById(id: number): Promise<AnimeResponse> {
        return await makeRequest<AnimeResponse>(`anime/${id}`);
    }

    public static async getCharactersStaff(
        id: number,
    ): Promise<CharactersStaff> {
        return await makeRequest<CharactersStaff>(
            `anime/${id}/characters_staff`,
        );
    }

    public static async getEpisodes(id: number, page = 1): Promise<Episodes> {
        return await makeRequest<Episodes>(`anime/${id}/episodes/${page}`);
    }

    public static async getNews(id: number): Promise<News> {
        return await makeRequest<News>(`anime/${id}/news`);
    }

    public static async getPictures(id: number): Promise<Pictures> {
        return await makeRequest<Pictures>(`anime/${id}/pictures`);
    }

    public static async getVideos(id: number): Promise<Videos> {
        return await makeRequest<Videos>(`anime/${id}`);
    }

    public static async getStats(id: number): Promise<Stats> {
        return await makeRequest<Stats>(`anime/${id}`);
    }

    public static async getForum(id: number): Promise<Forum> {
        return await makeRequest(`anime/${id}/forum`);
    }

    public static async getMoreInfo(id: number): Promise<MoreInfo> {
        return await makeRequest(`anime/${id}/moreinfo`);
    }

    public static async getReviews(id: number): Promise<Reviews> {
        return await makeRequest(`anime/${id}/reviews`);
    }

    public static async getRecommendations(
        id: number,
    ): Promise<Recommendations> {
        return await makeRequest(`anime/${id}/recommendations`);
    }

    public static async getUserUpdates(id: number, page = 1) {
        return await makeRequest<UserUpdates>(
            `/anime/${id}/userupdates/${page}`,
        );
    }
}

abstract class Character {
    public static async getById(id: number): Promise<CharacterResponse> {
        return await makeRequest<CharacterResponse>(`character/${id}`);
    }
    public static async getPictures(id: number): Promise<Pictures> {
        return await makeRequest<Pictures>(`character/${id}/pictures`);
    }
}

abstract class Club {
    public static async getById(id: number): Promise<ClubResponse> {
        return await makeRequest<ClubResponse>(`club/${id}`);
    }

    public static async getMembers(id: number, page = 1): Promise<Members> {
        return await makeRequest<Members>(`club/${id}/members/${page}`);
    }
}

export { Anime, Character, Club };
