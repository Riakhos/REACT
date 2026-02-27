import { Link } from "react-router";

const NavigationBar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">Allo Ciné </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 gap-1.5">
                    <Link to="/my-list"><li className="btn">My list</li></Link>
                    <Link to="/signin"><li className="btn">Signin</li></Link>
                    <Link to="/signup"><li className="btn">Signup</li></Link>

                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li><a>Link 1</a></li>
                                <li><a>Link 2</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavigationBar;
