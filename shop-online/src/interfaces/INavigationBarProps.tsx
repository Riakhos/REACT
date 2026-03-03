import type { ArticleData } from "./IArticleData";

export interface INavigationBarProps {
    counterLike: number;
    baskets: ArticleData[];
    setBaskets: React.Dispatch<React.SetStateAction<ArticleData[]>>;
    counterCountBasket: number;
    countBaskets: number[];
    setCountBaskets: React.Dispatch<React.SetStateAction<number[]>>;
};