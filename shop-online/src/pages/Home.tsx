import { useState } from "react";
import Article from "../components/Article";
import { articles } from "../data/articles";
import type { ArticleData } from "../interfaces/iarticleData";

const categories = Array.from(new Set(articles.map(a => a.category)));

interface HomeProps {
  likes: number[];
  setLikes: React.Dispatch<React.SetStateAction<number[]>>;
  baskets: ArticleData[];
  setBaskets: React.Dispatch<React.SetStateAction<ArticleData[]>>;
  countBaskets: number[];
  setCountBaskets: React.Dispatch<React.SetStateAction<number[]>>;
};

function Home({ likes, setLikes, baskets, setBaskets, countBaskets, setCountBaskets }: HomeProps) {
  const [selected, setSelected] = useState(categories[0]);

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
          .map((article, index) => (
            <Article
              key={index}
              articleData={article}
              likeCount={likes[index]}
              onLike={() => {
                const newLikes = [...likes];
                newLikes[index]++;
                setLikes(newLikes);
              }}
              onCountBasket={() => {
                const newCountBaskets = [...countBaskets];
                newCountBaskets[index]++;
                setCountBaskets(newCountBaskets);
              }}
              baskets={baskets}
              onBasket={() => {
                setBaskets([...baskets, article]);
              }}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
