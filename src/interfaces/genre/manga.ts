import { BaseResponse } from '../common.ts';
import { MangaGenres } from '../enums.ts';

export interface MangaGenreResponse extends BaseResponse {
    manga: Manga[];
    item_count: number;
    mal_url: {
        mal_id: MangaGenres;
        name: string;
        type: 'manga';
        url: string;
    };
}

interface Manga {
    authors: Author[];
    demographics: Demographic[];
    explicit_genres: Genre[];
    genres: Genre[];
    image_url: string;
    mal_id: number;
    members: number;
    publishing_start: Date;
    score: number;
    serialization: string[];
    synopsis: string;
    themes: Theme[];
    title: string;
    type: 'Manga';
    url: string;
    volumes: number;
}

interface CommonIdentifier {
    mal_id: number;
    name: string;
    type: string;
    url: string;
}

interface Author extends CommonIdentifier {
    type: 'people';
}

interface Theme extends CommonIdentifier {
    mal_id: MangaGenres;
    type: 'manga';
}

interface Genre extends CommonIdentifier {
    mal_id: MangaGenres;
    type: 'manga';
}

interface Demographic extends CommonIdentifier {
    mal_id: MangaGenres;
    type: 'manga';
}
