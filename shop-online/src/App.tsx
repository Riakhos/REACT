import './App.css'
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Likes from "./components/Likes";
import Message from "./components/Message";
import Basket from "./components/Basket";
import { Routes, Route } from 'react-router-dom';
import { useState } from "react";
import { articles } from "./data/articles";
import type { ArticleData } from './interfaces/iarticleData';

function App() {

  const [likes, setLikes] = useState<number[]>(Array(articles.length).fill(0))
  const [baskets, setBaskets] = useState<ArticleData[]>([])
  const [countBaskets, setCountBaskets] = useState<number[]>(Array(articles.length).fill(0))

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
        <Route path="/likes" element={<Likes />} />
        <Route path="/message" element={<Message />} />
        <Route path="/basket" element={<Basket baskets={baskets} setBaskets={setBaskets} />} />
        <Route path="*" element={<Home likes={likes} setLikes={setLikes} baskets={baskets} setBaskets={setBaskets}  countBaskets={countBaskets} setCountBaskets={setCountBaskets} />} />
      </Routes>
    </div>
  )
}

export default App
