import { BaseResponse } from './../common.ts';

export interface Reviews extends BaseResponse {
    reviews: Review[];
}

interface Review {
    content: string;
    date: Date;
    helpful_count: number;
    mal_id: number;
    reviewer: Reviewer;
    url: string;
}

interface Reviewer {
    episodes_seen: number;
    image_url: string;
    scores: Scores;
    url: string;
    username: string;
}

interface Scores {
    animation: number;
    character: number;
    enjoyment: number;
    overall: number;
    sound: number;
    story: number;
}
