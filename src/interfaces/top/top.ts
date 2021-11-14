import { BaseResponse } from '../common.ts';

export interface TopAnimeResponse extends BaseResponse {
    top: Anime[];
}

interface Anime {
    end_date: string | null;
    episodes: number;
    image_url: string;
    mal_id: number;
    members: number;
    rank: number;
    score: number;
    start_date: string;
    title: string;
    type: string;
    url: string;
}

export interface TopMangaResponse extends BaseResponse {
    top: Manga[];
}

interface Manga {
    end_date: string | null;
    image_url: string;
    mal_id: number;
    members: number;
    rank: number;
    score: number;
    start_date: string;
    title: string;
    type: string;
    url: string;
    volumes: number;
}

export interface TopCharacterResponse extends BaseResponse {
    top: Character[];
}

interface Character {
    animeography: {
        mal_id: number;
        name: string;
        type: 'anime';
        url: string;
    };
    mangaography: {
        mal_id: number;
        name: string;
        type: 'manga';
        url: string;
    };
    favorites: number;
    image_url: string;
    mal_id: number;
    name_kanji: string;
    rank: number;
    title: string;
    url: string;
}

export interface TopPeopleResponse extends BaseResponse {
    top: Person[];
}

interface Person {
    birthday: Date;
    favorites: number;
    image_url: string;
    mal_id: number;
    name_kanji: string;
    rank: number;
    title: string;
    url: string;
}
