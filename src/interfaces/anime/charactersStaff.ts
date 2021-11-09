import { BaseResponse } from "../common.ts";

export interface CharactersStaff extends BaseResponse {
    characters: Character[];
    staff: Staff[];
}

interface Character extends CommonIdentifier {
    role: Role;
    voice_actors: VoiceActor[];
}

interface VoiceActor extends CommonIdentifier {
    language: Language;
}

interface Staff extends CommonIdentifier {
    positions: string[];
}

enum Role {
    Main = "Main",
    Supporting = "Supporting",
}

enum Language {
    English = "English",
    French = "French",
    German = "German",
    Hungarian = "Hungarian",
    Italian = "Italian",
    Japanese = "Japanese",
    Korean = "Korean",
    Spanish = "Spanish",
}

interface CommonIdentifier {
    mal_id: number;
    name: string;
    image_url: string;
    url: string;
}
