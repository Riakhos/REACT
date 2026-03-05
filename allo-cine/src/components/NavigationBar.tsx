import { Link } from "react-router";
import Signin from "./Signin";
import Signup from "./Signup";
import { useContext } from "react";
import { WishListContext } from "../context/WishListContext"

const NavigationBar = () => {
    const {wishList} = useContext(WishListContext)
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">Allo Ciné </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 gap-1.5">
                    <Link to="/my-list"><li className="btn">My list ({wishList.length}) </li></Link>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <Link to="/signin"><li className="btn" onClick={()=>(document.getElementById('form-signin') as HTMLDialogElement)?.showModal()}>Signin</li></Link>
                    <dialog id="form-signin" className="modal">
                        <Signin />                        
                    </dialog>
                    <Link to="/signup"><li className="btn" onClick={()=>(document.getElementById('form-signup') as HTMLDialogElement)?.showModal()}>Signup</li></Link>
                    <dialog id="form-signup" className="modal">
                        <Signup />                        
                    </dialog>

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
