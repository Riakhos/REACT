import Article from "../components/Article";
import type { ArticleData } from "../interfaces/iarticleData";
import { useArticleActions } from '../hooks/useArticleActions';

interface LikesProps {
  likes: number[];
  setLikes: React.Dispatch<React.SetStateAction<number[]>>;
  baskets: ArticleData[];
  setBaskets: React.Dispatch<React.SetStateAction<ArticleData[]>>;
  countBaskets: number[];
  setCountBaskets: React.Dispatch<React.SetStateAction<number[]>>;
  articles: ArticleData[];
}

const Likes = ({ likes, setLikes, baskets, setBaskets, countBaskets, setCountBaskets, articles }: LikesProps) => {
  // Associer chaque article à son nombre de likes
  const articlesWithLikes = articles.map((article, idx) => ({
    ...article,
    likeCount: likes[idx] || 0
  }));

  // Trier par nombre de likes décroissant et ne garder que ceux avec au moins 1 like
  const sorted = articlesWithLikes
    .filter(a => a.likeCount > 0)
    .sort((a, b) => b.likeCount - a.likeCount);

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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Produits les plus likés</h1>
      {sorted.length === 0 ? (
        <p>Aucun produit liké pour le moment.</p>
      ) : (
        <div>
          {sorted.map(article => (
            <Article
              key={article.id}
              articleData={article}
              likeCount={article.likeCount}
              onLike={() => handleLike(article.id)}
              onCountBasket={() => handleCountBasket(article.id)}
              baskets={baskets}
              onBasket={() => handleBasket(article)}
              showDetails={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Likes;
