export interface BaseResponse {
    request_cache_expiry: number;
    request_cached: boolean;
    request_hash: string;
}

export interface CommonIdentifier {
    mal_id: number;
    name: string;
    url: string;
    type?: string;
    image_url?: string;
}
