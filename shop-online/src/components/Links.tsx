import { FaHome } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import { BsBasket } from "react-icons/bs";

export const links = [
    {
        name: 'Home',
        path: '/home',
        icon: FaHome
    },
    {
        name: 'Likes',
        path: '/likes',
        icon: AiFillLike        
    },
    {
        name: 'Message',
        path: '/message',
        icon: MdOutlineMessage
    },
    {
        name: 'Basket',
        path: '/basket',
        icon: BsBasket
    }
]