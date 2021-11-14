import { BaseResponse } from '../common.ts';

export interface UserResponse extends BaseResponse {
    user_id: number;
    username: string;
    url: string;
    image_url: string;
    last_online: Date;
    gender: string;
    birthday: Date;
    location: string;
    joined: Date;
    anime_stats: AnimeStats;
    manga_stats: MangaStats;
    favorites: Favorites;
}

interface AnimeStats {
    days_watched: number;
    mean_score: number;
    watching: number;
    completed: number;
    oh_hold: number;
    dropper: number;
    plan_to_watch: number;
    total_entries: number;
    rewatched: number;
    episodes_watched: number;
}

interface MangaStats {
    days_read: number;
    mean_score: number;
    reading: number;
    completed: number;
    on_hold: number;
    dropped: number;
    plan_to_read: number;
    total_entries: number;
    reread: number;
    chapters_read: number;
    volumes_read: number;
}

interface Favorites {
    anime: Anime[];
    manga: Manga[];
    characters: Character[];
    people: Person[];
}

interface CommonIdentifier {
    mal_id: number;
    url: string;
    image_url: string;
    name: string;
}

interface Anime extends CommonIdentifier {}
interface Manga extends CommonIdentifier {}
interface Person extends CommonIdentifier {}
interface Character extends CommonIdentifier {}
