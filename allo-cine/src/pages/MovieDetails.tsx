import { useParams } from "react-router"
import { movies } from '../data/movies'
import { useState, useContext, useEffect } from "react";
import type { IMovie } from '../interfaces/imovie'
import Movie from '../components/Movie'
import { WishListContext } from "../context/WishListContext"
import SkeletonMovieDetails from '../components/SkeletonMovieDetails'

const MovieDetails = () => {
    const [movieName, setMovieName] = useState<string>('')
    const { id } = useParams()
    const { wishList } = useContext(WishListContext)
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
      const timer = setTimeout(() => setIsLoading(false), 1000)
      return () => clearTimeout(timer)
    }, [])
    
    const oneMovie = movies.find((movie: IMovie) => movie.id === Number(id))
    const isIn = !!wishList.find((item: IMovie) => item.id === oneMovie?.id)
    
    const getMovie = (myMovie: IMovie) => {
        setMovieName(myMovie.title)
    }

    if (isLoading) {
        return <SkeletonMovieDetails />
    }
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
            
            <Movie 
                movieData={oneMovie}
                handleParentClick={getMovie}
                isInWishList={isIn}
                showDetails={true}
            />
        </div>
    )
}

export default MovieDetails