import type { ArticleData } from "./IArticleData";

export interface IBasketProps {
  baskets: ArticleData[];
  setBaskets: React.Dispatch<React.SetStateAction<ArticleData[]>>;
  countBaskets?: number[];
  setCountBaskets?: React.Dispatch<React.SetStateAction<number[]>>;
};