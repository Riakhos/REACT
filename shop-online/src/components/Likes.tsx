import Article from "./Article";
import { useArticleActions } from '../hooks/useArticleActions';
import type { ILikesProps } from "../interfaces/ILikesProps";

const Likes = ({ likes, setLikes, baskets, setBaskets, countBaskets, setCountBaskets, articles }: ILikesProps) => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center mt-8">
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
