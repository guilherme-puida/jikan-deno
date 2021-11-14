import { BaseResponse } from '../common.ts';

export interface AnimeListResponse extends BaseResponse {
    anime: Anime[];
}

interface Anime {
    added_to_list: boolean;
    airing_status: number;
    days: number | null;
    demographics: Demographic[];
    end_date: Date;
    genres: Genre[];
    has_episode_video: boolean;
    has_promo_video: boolean;
    has_video: boolean;
    image_url: string;
    is_rewatching: boolean;
    licensors: Licensor[];
    mal_id: number;
    priority: string;
    rating: string;
    score: number;
    season_name: string | null;
    season_year: number;
    start_date: Date;
    storage: string | null;
    studios: Studio[];
    tags: string | null;
    title: string;
    total_episodes: number;
    type: string;
    url: string;
    video_url: string;
    watch_end_date: Date | null;
    watch_start_date: Date | null;
    watched_episodes: number;
    watching_status: number;
}

interface CommonIdentifier {
    mal_id: number;
    name: string;
    type: string;
    url: string;
}

interface Demographic extends CommonIdentifier {}
interface Genre extends CommonIdentifier {}
interface Licensor extends CommonIdentifier {}
interface Studio extends CommonIdentifier {}
