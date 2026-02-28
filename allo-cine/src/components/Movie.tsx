import { FaPlay } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { MdOutlineManageSearch } from "react-icons/md";
import type { IMovie } from "../interfaces/imovie";
import { useState } from "react";
import { Link } from "react-router";

const Movie = ({ movieData, handleParentClick }: { movieData: IMovie, handleParentClick?: (movie: IMovie) => void }) => {

    const[counter, setCounter] = useState<number>(0)
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
                    <AiFillLike onClick={ () => setCounter(counter + 1) } size={30}/> {counter}
                    <FaPlay onClick={ () => orderMovie() } size={27}/>
                    <Link to={`/movies/${movieData.id}`} ><MdOutlineManageSearch  size={27}/></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Movie;
 