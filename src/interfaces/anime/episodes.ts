import { BaseResponse } from "../common.ts";

export interface Episodes extends BaseResponse {
    episodes: Episode[];
    episodes_last_page: number;
}

interface Episode {
    aired: Date;
    episode_id: number;
    filler: boolean;
    forum_url: string;
    recap: boolean;
    title: string;
    title_japanese: string;
    title_romanji: string;
    video_url: string;
}
