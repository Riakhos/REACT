import { useEffect, useState } from "react";
import Article from "../components/Article";
import type { ArticleData } from "../interfaces/IArticleData";
import { getArticles } from '../api/articles';
import { useArticleActions } from '../hooks/useArticleActions';
import type { IHomeProps } from "../interfaces/IHomeProps";



function Home({ likes, setLikes, baskets, setBaskets, countBaskets, setCountBaskets }: IHomeProps) {
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
  const categories = ['All', ...Array.from(new Set(articles.map(a => a.category)))];

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
          .filter(article => selected === 'All' || article.category === selected)
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
