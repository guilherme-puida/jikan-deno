import { BaseResponse } from './../common.ts';

export interface News extends BaseResponse {
    articles: Article[];
}

interface Article {
    author_name: string;
    author_url: string;
    comments: number;
    date: Date;
    forum_url: string;
    image_url: string;
    intro: string;
    title: string;
    url: string;
}
