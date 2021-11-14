import { BaseResponse } from '../common.ts';

export interface FriendsResponse extends BaseResponse {
    friends: Friend[];
}

interface Friend {
    friends_since: Date;
    image_url: string;
    last_online: Date;
    url: string;
    username: string;
}
