import { BaseResponse } from '../common.ts';
import { AnimeGenres } from '../enums.ts';

export interface ProducerResponse extends BaseResponse {
    meta: {
        mal_id: number;
        name: string;
        type: 'anime';
        url: string;
    };
    anime: Anime[];
}

interface Anime {
    airing_start: Date;
    demographics: Demographic[];
    episodes: number;
    explicit_genres: Genre[];
    genres: Genre[];
    image_url: string;
    kids: boolean;
    licensors: string[];
    mal_id: number;
    members: number;
    producer: Producer[];
    r18: boolean;
    score: number;
    source: string;
    synopsis: string;
    themes: Theme[];
    title: string;
    type: string;
    url: string;
}

interface CommonIdentifier {
    mal_id: number;
    name: string;
    type: string;
    url: string;
}

interface Demographic extends CommonIdentifier {
    mal_id: AnimeGenres;
    type: 'anime;';
}

interface Genre extends CommonIdentifier {
    mal_id: AnimeGenres;
    type: 'anime';
}

interface Theme extends CommonIdentifier {
    mal_id: AnimeGenres;
    type: 'anime';
}

interface Producer extends CommonIdentifier {}
