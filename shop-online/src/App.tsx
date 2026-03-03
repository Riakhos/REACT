import './App.css'
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Likes from "./components/Likes";
import Message from "./components/Message";
import Basket from "./components/Basket";
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getArticles } from './api/articles';
import type { ArticleData } from './interfaces/iarticleData';
import ArticleDetails from "./pages/ArticleDetails";


function App() {
  const [articles, setArticles] = useState<ArticleData[]>([]);
  const [likes, setLikes] = useState<number[]>([]);
  const [baskets, setBaskets] = useState<ArticleData[]>([]);
  const [countBaskets, setCountBaskets] = useState<number[]>([]);

  // Charger les articles au montage
  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data);
      setLikes(Array(data.length).fill(0));
      setCountBaskets(Array(data.length).fill(0));
    });
  }, []);

  return (
    <div data-theme="nord">
      <NavigationBar 
        counterLike={likes.reduce((a, b) => a + b, 0)}
        baskets={baskets}
        setBaskets={setBaskets}
        counterCountBasket={countBaskets.reduce((a, b) => a + b, 0)}
        countBaskets={countBaskets}
        setCountBaskets={setCountBaskets}
      />
      <Routes>
        <Route path="/" element={<Home likes={likes} setLikes={setLikes} baskets={baskets} setBaskets={setBaskets} countBaskets={countBaskets} setCountBaskets={setCountBaskets} />} />
        <Route path="/likes" element={<Likes likes={likes} setLikes={setLikes} baskets={baskets} setBaskets={setBaskets} countBaskets={countBaskets} setCountBaskets={setCountBaskets} articles={articles} />} />
        <Route path="/message" element={<Message />} />
        <Route path="/basket" element={<Basket baskets={baskets} setBaskets={setBaskets} />} />
        <Route path="*" element={<Home likes={likes} setLikes={setLikes} baskets={baskets} setBaskets={setBaskets}  countBaskets={countBaskets} setCountBaskets={setCountBaskets} />} />
        <Route path="/articles/:id" element={<ArticleDetails likes={likes} setLikes={setLikes} baskets={baskets} setBaskets={setBaskets}  countBaskets={countBaskets} setCountBaskets={setCountBaskets} />} />
      </Routes>
    </div>
  )
}

export default App
