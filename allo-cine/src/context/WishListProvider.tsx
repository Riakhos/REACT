import { useState, useEffect, type ReactNode } from "react"
import type { IMovie } from "../interfaces/imovie"
import { WishListContext } from "./WishListContext"

interface WishListProviderProps {
    children: ReactNode
}

const WishListProvider = ({ children }: WishListProviderProps) => {

    // Initialisation sécurisée : toujours retourner un tableau
    const [wishList, setWishList] = useState<IMovie[]>(() => {

        const stored = localStorage.getItem('wishList')
        
        try {
            const parsed = stored ? JSON.parse(stored) : []
            return Array.isArray(parsed) ? parsed : []
        } catch {
            return []
        }
    })

    useEffect(() => {
      localStorage.setItem('wishList', JSON.stringify(wishList))    
    }, [wishList])
    
    const handleWishList = (myMovie: IMovie) => {
        if (!wishList.includes(myMovie)) {
            setWishList([...wishList, myMovie])
            // localStorage.setItem('wishList', JSON.stringify([...wishList, myMovie]))
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