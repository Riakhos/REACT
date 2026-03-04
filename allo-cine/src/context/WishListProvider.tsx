import { useState, type ReactNode } from "react";
import type { IMovie } from "../interfaces/imovie"
import { WishListContext } from "./WishListContext"

interface WishListProviderProps {
    children: ReactNode
}

const WishListProvider = ({ children }: WishListProviderProps) => {

    const [wishList, setWishList] = useState<IMovie[]>([])

    const handleWishList = (myMovie: IMovie) => {
        if (!wishList.includes(myMovie)) {
            setWishList([...wishList, myMovie])
        } else {
            setWishList(wishList.filter((item) => item.id !== myMovie.id))
        }
    }
    return (
        <WishListContext.Provider value={{wishList, handleWishList}} >
            {children}
        </WishListContext.Provider>
    )
}

export default WishListProvider