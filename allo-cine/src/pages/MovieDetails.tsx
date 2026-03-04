import { useParams } from "react-router"
import { movies } from '../data/movies'
import { useState, useContext } from "react";
import type { IMovie } from '../interfaces/imovie'
import Movie from '../components/Movie'
import { WishListContext } from "../context/WishListContext"

const MovieDetails = () => {
    const [movieName, setMovieName] = useState<string>('')
    const getMovie = (myMovie: IMovie) => {
        setMovieName(myMovie.title)
    }
    const { id } = useParams()
    const oneMovie = movies.find((movie: IMovie) => movie.id === Number(id))

    const { wishList } = useContext(WishListContext)
    const isIn = !!wishList.find((item: IMovie) => item.id === oneMovie?.id)

    if (!oneMovie) {
        return <div>Film introuvable</div>
    }

    return (
        <div>
            <p>
                {
                    movieName != '' && (`Vous avez choisi ${movieName}`)
                }
            </p>
            ici on display un seul film ! {id}
            
            <Movie movieData={oneMovie} handleParentClick={getMovie} isInWishList={isIn} />
        </div>
    )
}

export default MovieDetails