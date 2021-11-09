import { BaseResponse, CommonIdentifier } from "./../common.ts";

export interface Recommendations extends BaseResponse {
    recommendations: Recommendation[];
}

interface Recommendation extends CommonIdentifier {
    title: string;
    recommendation_count: number;
    recommendation_url: string;
}
