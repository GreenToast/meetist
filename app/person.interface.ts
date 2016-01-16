export interface Person {
    id: number;
    name: string;
    imgUrl: string;
    status: SwipeStatus
}

export enum SwipeStatus {Positive, Negative, NotSwiped}
