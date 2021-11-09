import { BaseResponse } from "./../common.ts";

export interface ClubResponse extends BaseResponse {
    anime_relations: Anime[];
    category: string;
    character_relations: Character[];
    created: Date;
    image_url: string;
    mal_id: number;
    manga_relations: Manga[];
    members_count: number;
    pictures_count: number;
    staff: Staff[];
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

interface Anime extends CommonIdentifier {
    type: Type.Anime;
}

interface Character extends CommonIdentifier {
    type: Type.Character;
}

interface Manga extends CommonIdentifier {
    type: Type.Manga;
}

interface Staff extends CommonIdentifier {
    type: Type.Profile;
}

enum Type {
    Anime = "anime",
    Character = "character",
    Manga = "manga",
    Profile = "profile",
}
