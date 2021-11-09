import { BaseResponse } from "./../common.ts";
export interface UserUpdates extends BaseResponse {
    users: User[];
}

interface User {
    date: Date;
    episodes_seen: number | null;
    episodes_total: number | null;
    image_url: string;
    score: number | null;
    status: Status;
    url: string;
    username: string;
}

enum Status {
    Completed = "Completed",
    Dropped = "Dropped",
    OnHold = "On-Hold",
    PlanToWatch = "Plan to Watch",
    Watching = "Watching",
}
