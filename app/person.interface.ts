import {SwipeStatus} from "./swipe-status.enum";
export interface Person {
    id: number;
    name: string;
    imgUrl: string;
    status: SwipeStatus
}