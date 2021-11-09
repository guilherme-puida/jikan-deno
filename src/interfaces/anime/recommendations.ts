import { BaseResponse } from "./../common.ts";

export interface Recommendations extends BaseResponse {
    recommendations: Recommendation[];
}

interface Recommendation {
    image_url: string;
    mal_id: number;
    url: string;
    title: string;
    recommendation_count: number;
    recommendation_url: string;
}
