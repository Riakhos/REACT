import { useContext, useState } from "react"
import { WishListContext } from "../context/WishListContext"
import Movie from "../components/Movie";
import type { IMovie } from "../interfaces/imovie";

const MyList = () => {
    const [movieName, setMovieName] = useState<string>('')
    const getMovie = (myMovie: IMovie) => {
        setMovieName(myMovie.title)
    }
    const { wishList } = useContext(WishListContext)
    return (
        <div className="flex items-center justify-center h-screen gap_3 flex-wrap" >
            <p>
                {
                    movieName != '' && (`Vous avez choisi ${movieName}`)
                }
            </p>
            {
                wishList && wishList.map((item: IMovie) => (
                    <Movie movieData={item} handleParentClick={getMovie} isInWishList={true} />
                ))
        }
        </div>
    )
}

export default MyList