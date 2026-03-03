import { AiFillLike } from "react-icons/ai";
import { BsBasket } from "react-icons/bs";
import { MdOutlineManageSearch } from "react-icons/md";
import type { ArticleData } from "../interfaces/IArticleData";
import { Link } from "react-router";
import type { IArticleProps } from "../interfaces/IArticleProps";

const Article = ({ articleData, likeCount, onLike, onBasket, baskets, onCountBasket, showDetails = false }: IArticleProps) => {

    const inBasket = baskets.some((article: ArticleData) => article.id === articleData.id);
    const handleOnClickBasket = () => {
        onBasket();
        onCountBasket();
    };

    return(
        <div className="card bg-base-200 w-full max-w-2xl mt-5 mx-auto p-6 rounded-lg shadow-lg flex flex-col">
            <figure className="h-48 w-full overflow-hidden flex items-center justify-center bg-blue-100 mb-4">
                <img
                  className="h-44 w-44 object-contain"
                  src={articleData.thumbnail} alt={`Image du ${articleData.title}`} />
            </figure>
            <div className="card-body text-blue-800 bg-blue-200">
                <h2 className="card-title text-3xl font-bold mb-2">{articleData.title}</h2>
                <p className="text-lg font-semibold text-blue-700 mb-2">Prix : {articleData.price} €</p>
                <p className="mb-2 text-gray-700">{articleData.description}</p>
                {showDetails && (
                  <>
                    <p className="mb-2 text-blue-600">Catégorie : {articleData.category}</p>
                    <div className="mb-4">
                        <span className="font-semibold">Note :</span> {articleData.rating} / 5
                    </div>
                  </>
                )}
                <div className="rating justify-end mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div
                            key={i}
                            className={`mask mask-star ${i < Math.round(articleData.rating) ? 'bg-blue-700' : 'bg-blue-300'}`}
                            aria-label={`${i + 1} star`}
                        />
                    ))}
                </div>
                <div className="card-actions justify-end gap-2">
                    <button onClick={onLike} className="btn btn-ghost btn-circle" aria-label="Like">
                        <AiFillLike size={28} />{likeCount}
                    </button>
                    {!showDetails && (
                        <Link className="btn btn-ghost btn-circle"
                            aria-label="Voir plus" to={`/articles/${articleData.id}`}><MdOutlineManageSearch  size={27}/></Link>
                    )}
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