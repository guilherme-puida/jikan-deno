import { BaseResponse } from '../common.ts';

export interface HistoryResponse extends BaseResponse {
    history: HistoryEntry[];
}

interface HistoryEntry {
    date: Date;
    increment: number;
    meta: CommonIdentifier;
}

interface CommonIdentifier {
    mal_id: number;
    name: string;
    type: 'anime' | 'manga';
    url: string;
}
