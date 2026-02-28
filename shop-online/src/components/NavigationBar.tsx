import { links } from "./Links";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import type { ArticleData } from "../interfaces/iarticleData";

interface NavigationBarProps {
    counterLike: number;
    baskets: ArticleData[];
    setBaskets: React.Dispatch<React.SetStateAction<ArticleData[]>>;
    counterCountBasket: number;
    countBaskets: number[];
    setCountBaskets: React.Dispatch<React.SetStateAction<number[]>>;
};

const NavigationBar = ({ counterLike, baskets, setBaskets, counterCountBasket, countBaskets, setCountBaskets }: NavigationBarProps) => {
    return (
    <div className="navbar bg-blue-100 shadow-sm">
        <div className="flex-1">
            <NavLink
                to="/Home"
                className="btn btn-ghost text-xl text-blue-800"
            >
                <img className="size-14" src="logo.svg" alt="Logo Shop Online"/>Shop Online
            </NavLink>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                {links.map(link => (
                    <li key={link.path}>
                        {link.name === 'Basket' ? (
                        <details>
                            <summary className="btn btn-ghost flex items-center text-blue-800">
                                <link.icon size={28} className="text-blue-800" />
                                {link.name} {counterCountBasket}
                            </summary>
                            <Basket baskets={baskets} setBaskets={setBaskets} countBaskets={countBaskets} setCountBaskets={setCountBaskets} />
                        </details>
                        ) : (
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                `text-blue-800 btn btn-ghost ${isActive ? 'btn-active bg-blue-200' : ''}`
                                }
                            >
                                <link.icon size={28} className="text-blue-800" />
                                {link.name === 'Likes' ? <span>{link.name} {counterLike}</span> : link.name}
                            </NavLink>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    </div>
    )
}
export default NavigationBar