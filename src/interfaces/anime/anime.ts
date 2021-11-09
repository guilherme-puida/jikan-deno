import { CommonIdentifier, BaseResponse } from "../common.ts";

export interface AnimeRequest extends BaseResponse {
    aired: Aired;
    airing: boolean;
    background: string;
    broadcast: string;
    duration: string;
    ending_themes: string;
    episodes: string;
    demographics: Genre[];
    explicit_genres: string;
    external_links: Link[];
    favorites: number;
    genres: Genre[];
    image_url: string;
    licensors: Licensor[];
    mal_id: number;
    members: number;
    opening_themes: string[];
    popularity: number;
    producers: Producer[];
    rank: number;
    rating: string;
    related: Related;
    score: number;
    scored_by: number;
    source: string;
    status: string;
    studios: Studio[];
    synopsis: string;
    themes: Theme[];
    title: string;
    title_english: string;
    title_japanese: string;
    title_synonyms: string;
    trailer_url: string;
    type: string;
    url: string;
}

interface Aired {
    from: Date;
    prop: Prop;
    string: string;
    to: Date;
}

interface Prop {
    from: DiscreteDate;
    to: DiscreteDate;
}

interface DiscreteDate {
    day: number;
    month: number;
    year: number;
}

interface Genre extends CommonIdentifier {
    mal_id: number;
    name: string;
    type: Type.Anime;
    url: string;
}

enum Type {
    Anime = "anime",
    Manga = "manga",
}

interface Related {
    Adaptation: Array<Anime | Manga>;
    "Side Story": Array<Anime | Manga>;
    Summary: Array<Anime | Manga>;
}

interface Link {
    name: string;
    url: string;
}

interface Anime extends CommonIdentifier {
    type: Type.Anime;
}
interface Manga extends CommonIdentifier {
    type: Type.Manga;
}
interface Producer extends CommonIdentifier {}
interface Licensor extends CommonIdentifier {}
interface Studio extends CommonIdentifier {}
interface Theme extends CommonIdentifier {}
