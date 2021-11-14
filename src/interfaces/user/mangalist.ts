import { BaseResponse } from '../common.ts';

export interface MangaListResponse extends BaseResponse {
    manga: Manga[];
}

interface Manga {
    added_t0_list: boolean;
    days: number | null;
    demographics: Demographic[];
    end_date: Date | null;
    genres: Genre[];
    image_url: string;
    is_rereading: boolean;
    magazines: Magazine[];
    mal_id: number;
    priority: string;
    publishing_status: number;
    read_chaperts: number;
    read_end_date: Date | null;
    read_start_date: Date | null;
    read_volumes: number;
    reading_status: number;
    retail: string | null;
    score: number;
    start_date: Date;
    title: string;
    total_chapters: number;
    total_volumes: number;
    type: string;
    url: string;
}

interface CommonIdentifier {
    mal_id: number;
    name: string;
    type: string;
    url: string;
}

interface Demographic extends CommonIdentifier {}
interface Genre extends CommonIdentifier {}
interface Magazine extends CommonIdentifier {}
