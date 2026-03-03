import { useParams } from "react-router";
import { useEffect, useState } from "react";
import type { ArticleData } from '../interfaces/IArticleData';
import Article from "../components/Article";
import { getArticle } from "../api/articles";
import { useArticleActions } from '../hooks/useArticleActions';
import type { IArticleDetailsProps } from "../interfaces/IArticleDetailsProps";

const ArticleDetails = ({ likes, setLikes, baskets, setBaskets, countBaskets, setCountBaskets }: IArticleDetailsProps) => {
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