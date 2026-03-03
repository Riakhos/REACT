import type { ArticleData } from "./IArticleData";

export interface IArticleDetailsProps {
    likes: number[];
    setLikes: React.Dispatch<React.SetStateAction<number[]>>;
    baskets: ArticleData[];
    setBaskets: React.Dispatch<React.SetStateAction<ArticleData[]>>;
    countBaskets: number[];
    setCountBaskets: React.Dispatch<React.SetStateAction<number[]>>;
}