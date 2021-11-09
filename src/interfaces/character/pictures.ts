import { BaseResponse } from "./../common.ts";

export interface Pictures extends BaseResponse {
    pictures: Picture[];
}

interface Picture {
    image_url: string;
}
