import { BaseResponse } from "./../common.ts";

export interface PersonResponse extends BaseResponse {
    about: string;
    alternate_names: string[];
    anime_staff_positions: AnimeStaffPosition[];
    birthday: Date;
    family_name: string;
    given_name: string;
    image_url: string;
    mal_id: number;
    member_favorites: number;
    name: string;
    published_manga: PublishedManga[];
    url: string;
    voice_acting_roles: VoiceActingRole[];
}

interface AnimeStaffPosition {
    anime: Anime;
    position: string;
}

interface Anime extends CommonIdentifier {}

interface Manga extends CommonIdentifier {}

interface PublishedManga {
    manga: Manga;
    position: string;
}

interface Character extends CommonIdentifier {}

interface VoiceActingRole {
    anime: Anime;
    character: Character;
    role: Role;
}

enum Role {
    Main = "Main",
    Supporting = "Supporting",
}

interface CommonIdentifier {
    image_url: string;
    mal_id: number;
    name: string;
    url: string;
}
