import { BaseResponse } from '../common.ts';

export interface CharacterResponse extends BaseResponse {
    about: string;
    animeography: Anime[];
    image_url: string[];
    mal_id: number;
    mangaography: Manga[];
    members_favorites: number;
    name: string;
    name_kanji: string;
    url: string;
    voice_actors: VoiceActor[];
}

interface Anime extends CommonIdentifier {
    role: string;
}

interface Manga extends CommonIdentifier {
    role: string;
}

interface VoiceActor extends CommonIdentifier {
    language: string;
}

interface CommonIdentifier {
    mal_id: number;
    image_url: string;
    url: string;
    name: string;
}
