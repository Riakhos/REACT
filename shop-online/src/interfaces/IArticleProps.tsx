import type { ArticleData } from "./IArticleData";

export interface IArticleProps {
    articleData: ArticleData;
    likeCount: number;
    onLike: () => void;
    baskets: ArticleData[];
    onBasket: () => void;
    onCountBasket: () => void;
    showDetails?: boolean;
}