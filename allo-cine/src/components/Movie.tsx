import { FaPlay } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import { IoMdCheckmarkCircle } from "react-icons/io";
import type { IMovie } from "../interfaces/imovie";
import { useContext } from "react";
import { Link } from "react-router";
import { CounterContext } from "../context/CounterContext"
import { WishListContext } from "../context/WishListContext"

interface IMovieComponent{
    movieData: IMovie
    handleParentClick?: (movie: IMovie) => void | null
    isInWishList: boolean
    showDetails?: boolean
}


const Movie = ({ movieData, handleParentClick, isInWishList, showDetails = false }: IMovieComponent) => {

    const { counter, setCounter } = useContext(CounterContext)
    
    const { handleWishList } = useContext(WishListContext)

    const orderMovie = () => {
        console.log('Salut!')
        handleParentClick?.(movieData)

    }

    if (showDetails) {
        // Version détaillée (layout horizontal)
        return (
            <div className="card bg-base-100 flex flex-row items-stretch shadow-sm">
                <figure className="w-1/2 shrink-0 flex items-center justify-center p-4">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
                        alt={`Affiche de ${movieData.title}`} />
                </figure>
                <div className="card-body w-1/2 flex flex-col justify-between">
                    <h2 className="card-title text-red-700 text-5xl font-bold">{movieData.title}</h2>
                    <div className="mb-2 space-y-1">
                        <div className="text-gray-400"><strong className="text-red-700 text-xl">Description :</strong> {movieData.overview}</div>
                        <div className="m-5">
                            <div className="text-gray-400"><strong className="text-xl text-red-700">Langue :</strong> {movieData.original_language}</div>
                            <div className="text-gray-400"><strong className="text-xl text-red-700">Date de sortie :</strong> {movieData.release_date}</div>
                            <div className="text-gray-400"><strong className="text-xl text-red-700">Adulte :</strong> {movieData.adult ? "Oui" : "Non"}</div>
                        </div>
                        <div className="m-5">
                            <div className="text-gray-400"><strong className="text-xl text-red-700">Popularité :</strong> {movieData.popularity}</div>
                            <div className="text-gray-400"><strong className="text-xl text-red-700">Nombre de Likes :</strong> {movieData.vote_count}</div>
                        </div>
                        <div className="flex justify-end rating">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`mask mask-star ${i < Math.round(movieData.vote_average) ? 'bg-red-600' : 'bg-gray-400'}`}
                                    aria-label={`${i + 1} star`}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="card-actions justify-end flex items-center gap-8">
                        {isInWishList  ? (<IoMdCheckmarkCircle onClick={() => handleWishList(movieData)} size={30} />) : (<IoIosAddCircle onClick={() => handleWishList(movieData)} size={30} />)}
                        <AiFillLike onClick={ () => setCounter(counter + 1) } size={30}/> {counter}
                        <FaPlay onClick={ () => orderMovie() } size={27}/>
                    </div>
                </div>
            </div>
        );
    }

    // Version compacte (pour la Home)
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
                <div className="card-actions justify-end flex items-center gap-8">
                    <Link to={`/movies/${movieData.id}`} ><p>Voir plus</p></Link>
                    {isInWishList  ? (<IoMdCheckmarkCircle onClick={() => handleWishList(movieData)} size={30} />) : (<IoIosAddCircle onClick={() => handleWishList(movieData)} size={30} />)}
                    <AiFillLike onClick={ () => setCounter(counter + 1) } size={30}/> {counter}
                    <FaPlay onClick={ () => orderMovie() } size={27}/>
                </div>
            </div>
        </div>
    );
};

export default Movie;
 