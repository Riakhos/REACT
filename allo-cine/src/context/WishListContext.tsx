import { createContext } from "react"
import type { IMovie } from "../interfaces/imovie"

interface IWishListContext {
	wishList: IMovie[];
	handleWishList: (myMovie: IMovie) => void;
}

export const WishListContext = createContext<IWishListContext>({
	wishList: [],
	handleWishList: () => {},
});
