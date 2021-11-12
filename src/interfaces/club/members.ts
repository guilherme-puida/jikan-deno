import { BaseResponse } from './../common.ts';

export interface Members extends BaseResponse {
    members: Member[];
}

interface Member {
    image_url: string;
    url: string;
    username: string;
}
