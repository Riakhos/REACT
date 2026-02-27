import { AiFillLike } from "react-icons/ai";
import { BsBasket } from "react-icons/bs";
import type { ArticleData } from "../interfaces/iarticleData";

interface ArticleProps {
    articleData: ArticleData;
    likeCount: number;
    onLike: () => void;
    baskets: ArticleData[];
    onBasket: () => void;
    onCountBasket: () => void;
};

const Article = ({ articleData, likeCount, onLike, onBasket, baskets, onCountBasket }: ArticleProps) => {

    const inBasket = baskets.some((article: ArticleData) => article.id === articleData.id);
    const handleOnClickBasket = () => {
        onBasket();
        onCountBasket();
    };

    return(
        <div className="card bg-base-200 w-175 h-125 shadow-lg flex flex-col">
            <figure className="h-48 w-full overflow-hidden flex items-center justify-center bg-blue-100">
                <img
                  className="h-44 w-44 object-contain"
                  src={articleData.image} alt={`Image du ${articleData.title}`} />
            </figure>
            <div className="card-body text-blue-800 bg-blue-200">
                <h2 className="card-title">{articleData.title} </h2>
                <p>{articleData.price} €</p>
                <p>{articleData.description}</p>
                <div className="rating justify-end">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div
                            key={i}
                            className={`mask mask-star ${i < Math.round(articleData.rating.rate) ? 'bg-blue-700' : 'bg-blue-300'}`}
                            aria-label={`${i + 1} star`}
                        />
                    ))}
                </div>
                <div className="card-actions justify-end gap-2">
                    <button onClick={onLike} className="btn btn-ghost btn-circle" aria-label="Like">
                        <AiFillLike size={28} />{likeCount}
                    </button>
                    <button 
                        onClick={handleOnClickBasket}
                        className="btn btn-ghost btn-circle"
                        aria-label="Ajouter au panier"
                        disabled={inBasket}
                    >
                        {inBasket ? "Added" : <BsBasket size={28}/>}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Article