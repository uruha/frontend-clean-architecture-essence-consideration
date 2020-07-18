/** BUsiness Data */
export interface ITodo {
    id: string;
    title: string;
    detail?: string;
    createdAt: Date;
}

export type ITodoList = ITodo[];

/** Business Rule */
export function isTitleTextValid(titleText: ITodo['title']): boolean {
    return titleText.length > 0 && titleText.length <= 60;
}

export function isDetailTextValid(detailText: ITodo['detail']): boolean {
    if (!detailText) return true;
    return detailText.length >= 0 && detailText.length <= 500;
}
