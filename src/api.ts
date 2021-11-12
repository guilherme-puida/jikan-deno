import { Members } from "./interfaces/club/members.ts";
import { ClubResponse } from "./interfaces/club/club.ts";
import { ky, PQueue } from "../dep.ts";
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
} from "./interfaces/anime/anime.ts";
import { CharacterResponse } from "./interfaces/character/character.ts";
import { PersonResponse } from "./interfaces/person/person.ts";
import { Pictures } from "./interfaces/pictures.ts";

const baseUrl = "https://api.jikan.moe/v3";
const queue = new PQueue({
    concurrency: 4,
});

const api = ky.create({
    hooks: {
        beforeRequest: [
            (request: Request) =>
                console.log(
                    `Making request ${queue.pending} on url ${request.url}`
                ),
        ],
        afterResponse: [
            async (_request, _options, response: Response) => {
                console.log(`After response on url ${response.url}`);
            },
        ],
    },
    prefixUrl: baseUrl,
    retry: {
        limit: 2,
        methods: ["get"],
    },
    timeout: 10000,
    parseJson: (text) =>
        JSON.parse(text, (_, value) => {
            let a;
            if (typeof value === "string") {
                a = /^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\+\d{2}:\d{2})$/.exec(
                    value
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

export namespace Anime {
    export async function getById(id: number): Promise<AnimeResponse> {
        return await makeRequest<AnimeResponse>(`anime/${id}`);
    }

    export async function getCharactersStaff(
        id: number
    ): Promise<CharactersStaff> {
        return await makeRequest<CharactersStaff>(
            `anime/${id}/characters_staff`
        );
    }

    export async function getEpisodes(
        id: number,
        page: number = 1
    ): Promise<Episodes> {
        return await makeRequest<Episodes>(`anime/${id}/episodes/${page}`);
    }

    export async function getNews(id: number): Promise<News> {
        return await makeRequest<News>(`anime/${id}/news`);
    }

    export async function getPictures(id: number): Promise<Pictures> {
        return await makeRequest<Pictures>(`anime/${id}/pictures`);
    }

    export async function getVideos(id: number): Promise<Videos> {
        return await makeRequest<Videos>(`anime/${id}`);
    }

    export async function getStats(id: number): Promise<Stats> {
        return await makeRequest<Stats>(`anime/${id}`);
    }

    export async function getForum(id: number): Promise<Forum> {
        return await makeRequest(`anime/${id}/forum`);
    }

    export async function getMoreInfo(id: number): Promise<MoreInfo> {
        return await makeRequest(`anime/${id}/moreinfo`);
    }

    export async function getReviews(id: number): Promise<Reviews> {
        return await makeRequest(`anime/${id}/reviews`);
    }

    export async function getRecommendations(
        id: number
    ): Promise<Recommendations> {
        return await makeRequest(`anime/${id}/recommendations`);
    }

    export async function getUserUpdates(id: number, page: number = 1) {
        return await makeRequest<UserUpdates>(
            `/anime/${id}/userupdates/${page}`
        );
    }
}

export namespace Person {
    export async function getById(id: number): Promise<PersonResponse> {
        return await makeRequest<PersonResponse>(`person/${id}`);
    }

    export async function getPictures(id: number): Promise<Pictures> {
        return await makeRequest<Pictures>(`person/${id}/pictures`);
    }
}

export namespace Character {
    export async function getById(id: number): Promise<CharacterResponse> {
        return await makeRequest<CharacterResponse>(`character/${id}`);
    }

    export async function getPictures(id: number): Promise<Pictures> {
        return await makeRequest<Pictures>(`character/${id}/pictures`);
    }
}

export namespace Club {
    export async function getById(id: number): Promise<ClubResponse> {
        return await makeRequest<ClubResponse>(`club/${id}`);
    }

    export async function getMembers(
        id: number,
        page: number = 1
    ): Promise<Members> {
        return await makeRequest<Members>(`club/${id}/members/${id}`);
    }
}
