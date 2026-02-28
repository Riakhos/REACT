import type { ArticleData } from "../interfaces/iarticleData";
import { articles } from "../data/articles";
import { GiTrashCan } from "react-icons/gi";

interface BasketProps {
  baskets: ArticleData[];
  setBaskets: React.Dispatch<React.SetStateAction<ArticleData[]>>;
  countBaskets?: number[];
  setCountBaskets?: React.Dispatch<React.SetStateAction<number[]>>;
};


function Basket({baskets, setBaskets, countBaskets, setCountBaskets }: BasketProps) {

  const handleDelete = (id:number) => {
    setBaskets(baskets.filter(article => article.id !== id));
    if (countBaskets && setCountBaskets) {
      // Trouver l'index de l'article supprimé dans le tableau source articles
      const index = articles.findIndex(article => article.id === id);
      if (index !== -1) {
        const newCountBaskets = [...countBaskets];
        newCountBaskets[index] = Math.max(0, newCountBaskets[index] - 1);
        setCountBaskets(newCountBaskets);
      }
    }
  }

  return (    
    <ul className="border border-blue-800 bg-blue-100 text-blue-800 rounded-md p-2 mt-7 w-52 shadow-sm z-40 absolute left-1/6 -translate-x-1/2">
        {baskets.length === 0 ? (
          <li><span>Panier vide</span></li>
        ) : (
          baskets.map((articleData) => (
            <li className="border border-blue-800 bg-blue-200 rounded-md mb-2" key={articleData.id}>
              <a className="relative block">
                <GiTrashCan onClick={() => handleDelete(articleData.id)} size={36} className="text-red-800 bg-blue-100 absolute top-2 right-2 border border-red-800 rounded-md p-1" />
                <img
                    className="h-24 w-24 object-contain"
                    src={articleData.image} alt={`Image du ${articleData.title}`} />
                <span className="block mt-2">{articleData.title}</span>
                <span className="block text-right pr-2">{articleData.price}€</span>
              </a>
            </li>
          ))
        )}
    </ul>
  )
}

export default Basket