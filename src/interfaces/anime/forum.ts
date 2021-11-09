import { BaseResponse } from "./../common.ts";

export interface Forum extends BaseResponse {
    topics: Topic[];
}

interface Topic {
    author_name: string;
    author_url: string;
    date_posted: string;
    last_post: Post;
    replies: number;
    title: string;
    topic_id: number;
    url: string;
}

interface Post {
    author_name: string;
    author_url: string;
    date_posted: Date;
    url: string;
}
