import { useEffect, useState } from "react";
import Article from "../components/Article";
import type { ArticleData } from "../interfaces/iarticleData";
import { getArticles } from '../api/articles';
import { useArticleActions } from '../hooks/useArticleActions';

interface HomeProps {
  likes: number[];
  setLikes: React.Dispatch<React.SetStateAction<number[]>>;
  baskets: ArticleData[];
  setBaskets: React.Dispatch<React.SetStateAction<ArticleData[]>>;
  countBaskets: number[];
  setCountBaskets: React.Dispatch<React.SetStateAction<number[]>>;
};

function Home({ likes, setLikes, baskets, setBaskets, countBaskets, setCountBaskets }: HomeProps) {
  const [articles, setArticles] = useState<ArticleData[]>([]);
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      try {
        const articlesFromBack = await getArticles();
        setArticles(articlesFromBack);
        if (articlesFromBack.length > 0) {
          setSelected(articlesFromBack[0].category);
        }
      } catch (error) {
        console.log('error', error);
      }
    };
    getData();
  }, []);

  // Catégories dynamiques
  const categories = Array.from(new Set(articles.map(a => a.category)));

  // Centralisation de la logique likes/panier
  const { handleLike, handleBasket, handleCountBasket } = useArticleActions(
    articles,
    likes,
    setLikes,
    baskets,
    setBaskets,
    countBaskets,
    setCountBaskets
  );

  // Articles populaires
  // const popularArticles = articles
  //     .map((article, i) => ({ ...article, likeCount: likes[i] }))
  //     .sort((a, b) => (b.likeCount ?? 0) - (a.likeCount ?? 0))
  //     .slice(0, 10);
  
  return (
    <div>
      <div role="tablist" className="justify-center mt-2 tabs tabs-lift text-blue-800">
        {categories.map(cat => (
          <a
            key={cat}
            role="tab"
            className={`tab ${selected === cat ? "tab-active text-blue-800 bg-blue-200 shadow-lg" : "text-blue-800 bg-blue-100 shadow-lg"}`}
            onClick={() => setSelected(cat)}
          >
            {cat}
          </a>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center mt-8">
        {articles
          .filter(article => article.category === selected)
          .map((article) => {
            const likeIndex = articles.findIndex(a => a.id === article.id);
            return (
              <Article
                key={article.id}
                articleData={article}
                likeCount={likes[likeIndex] ?? 0}
                onLike={() => handleLike(article.id)}
                onCountBasket={() => handleCountBasket(article.id)}
                baskets={baskets}
                onBasket={() => handleBasket(article)}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Home;
