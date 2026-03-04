import { FaPlay } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdOutlineManageSearch } from "react-icons/md";
import type { IMovie } from "../interfaces/imovie";
import { useContext } from "react";
import { Link } from "react-router";
import { CounterContext } from "../context/CounterContext"
import { WishListContext } from "../context/WishListContext"

interface IMovieComponent{
    movieData: IMovie,
    handleParentClick?: (movie: IMovie) => void | null,
    isInWishList: boolean
}


const Movie = ({ movieData, handleParentClick, isInWishList }: IMovieComponent) => {

    const { counter, setCounter } = useContext(CounterContext)
    
    const { handleWishList } = useContext(WishListContext)

    const orderMovie = () => {
        console.log('Salut!')
        handleParentClick?.(movieData)

    }

    return (
        <div className="card bg-base-100 w-96 h-150 shadow-sm">
            <figure>
                <img
                src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
                alt={`Affiche de ${movieData.title}`} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{movieData.title}</h2>
                <p>{movieData.overview}</p>
                <div className="card-actions justify-end flex items-center">
                    {
                        isInWishList  ? (<IoMdCheckmarkCircle onClick={() => handleWishList(movieData)} size={30} />) : (<IoIosAddCircle onClick={() => handleWishList(movieData)} size={30} />)
                    }
                    <AiFillLike onClick={ () => setCounter(counter + 1) } size={30}/> {counter}
                    <FaPlay onClick={ () => orderMovie() } size={27}/>
                    <Link to={`/movies/${movieData.id}`} ><MdOutlineManageSearch  size={27}/></Link>                    
                </div>
            </div>
        </div>
    );
};

export default Movie;
 