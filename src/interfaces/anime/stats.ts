import { BaseResponse } from './../common.ts';

export interface Stats extends BaseResponse {
    completed: number;
    dropped: number;
    on_hold: number;
    plan_to_watch: number;
    scores: { [score: string]: Score };
    total: number;
    watching: number;
}

interface Score {
    percentage: number;
    votes: number;
}
