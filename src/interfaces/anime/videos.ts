import { BaseResponse } from "./../common.ts";

export interface Videos extends BaseResponse {
    episodes: Episode[];
    promo: Promo[];
}

interface Episode {
    episode: string;
    image_url: string;
    title: string;
    url: string;
}

interface Promo {
    image_url: string;
    title: string;
    video_url: string;
}
