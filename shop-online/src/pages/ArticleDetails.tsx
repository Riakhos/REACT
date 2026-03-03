import { useParams } from "react-router";
import { useEffect, useState } from "react";
import type { ArticleData } from '../interfaces/iarticleData';
import Article from "../components/Article";
import { getArticle } from "../api/articles";
import { useArticleActions } from '../hooks/useArticleActions';

interface ArticleDetailsProps {
    likes: number[];
    setLikes: React.Dispatch<React.SetStateAction<number[]>>;
    baskets: ArticleData[];
    setBaskets: React.Dispatch<React.SetStateAction<ArticleData[]>>;
    countBaskets: number[];
    setCountBaskets: React.Dispatch<React.SetStateAction<number[]>>;
}

const ArticleDetails = ({ likes, setLikes, baskets, setBaskets, countBaskets, setCountBaskets }: ArticleDetailsProps) => {
    const { id } = useParams();
    const [oneArticle, setOneArticle] = useState<ArticleData | null>(null);

    useEffect(() => {
        if (id) {
            getArticle(id).then(setOneArticle);
        }
    }, [id]);

    // Toujours appeler le hook, même si oneArticle est null
    const { handleLike, handleBasket, handleCountBasket } = useArticleActions(
        oneArticle ? [oneArticle] : [],
        likes,
        setLikes,
        baskets,
        setBaskets,
        countBaskets,
        setCountBaskets
    );

    // Trouver l'index de l'article dans les likes et countBaskets (par id)
    const likeIndex = oneArticle ? likes.findIndex((_, i) => oneArticle.id === (baskets[i]?.id ?? oneArticle.id)) : 0;

    if (!oneArticle) {
        return <div>Chargement ou article introuvable</div>;
    }

    return (
        <div>
            <Article
                articleData={oneArticle}
                likeCount={likes[likeIndex] ?? 0}
                onLike={() => handleLike(oneArticle.id)}
                baskets={baskets}
                onBasket={() => handleBasket(oneArticle)}
                onCountBasket={() => handleCountBasket(oneArticle.id)}
                showDetails={true}
            />
        </div>
    );
};

export default ArticleDetails;