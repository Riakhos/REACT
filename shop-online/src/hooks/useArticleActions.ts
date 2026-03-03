import { useCallback } from "react";
import type { ArticleData } from "../interfaces/iarticleData";

export function useArticleActions(
  articles: ArticleData[],
  likes: number[],
  setLikes: React.Dispatch<React.SetStateAction<number[]>>,
  baskets: ArticleData[],
  setBaskets: React.Dispatch<React.SetStateAction<ArticleData[]>>,
  countBaskets: number[],
  setCountBaskets: React.Dispatch<React.SetStateAction<number[]>>
) {
  const getIndex = useCallback(
    (id: number) => articles.findIndex(a => a.id === id),
    [articles]
  );

  const handleLike = useCallback(
    (id: number) => {
      const index = getIndex(id);
      const newLikes = [...likes];
      newLikes[index] = (newLikes[index] ?? 0) + 1;
      setLikes(newLikes);
    },
    [likes, setLikes, getIndex]
  );

  const handleBasket = useCallback(
    (article: ArticleData) => {
      if (!baskets.some(a => a.id === article.id)) {
        setBaskets([...baskets, article]);
      }
    },
    [baskets, setBaskets]
  );

  const handleCountBasket = useCallback(
    (id: number) => {
      const index = getIndex(id);
      const newCount = [...countBaskets];
      newCount[index] = (newCount[index] ?? 0) + 1;
      setCountBaskets(newCount);
    },
    [countBaskets, setCountBaskets, getIndex]
  );

  return { handleLike, handleBasket, handleCountBasket };
}