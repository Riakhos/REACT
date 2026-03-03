import './App.css'
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Likes from "./components/Likes";
import Message from "./components/Message";
import Basket from "./components/Basket";
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getArticles } from './api/articles';
import type { ArticleData } from './interfaces/IArticleData';
import ArticleDetails from "./pages/ArticleDetails";


function App() {
  const [articles, setArticles] = useState<ArticleData[]>([]);
  // Initialiser likes à partir du localStorage si dispo, sinon []
  const [likes, setLikes] = useState<number[]>(() => {
    const saved = localStorage.getItem('likes');
    return saved ? JSON.parse(saved) : [];
  });
  const [baskets, setBaskets] = useState<ArticleData[]>([]);
  const [countBaskets, setCountBaskets] = useState<number[]>([]);

  // Charger les articles au montage
  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data);
      // Si likes vide (pas de localStorage), initialiser
      setLikes(prev => prev.length === 0 ? Array(data.length).fill(0) : prev);
      setCountBaskets(Array(data.length).fill(0));
    });
  }, []);

  // Sauvegarde automatique à chaque modification
  useEffect(() => {
    localStorage.setItem('likes', JSON.stringify(likes));
  }, [likes]);

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
