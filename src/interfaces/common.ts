export interface BaseResponse extends JSON {
    request_cache_expiry: number;
    request_cached: boolean;
    request_hash: string;
}
