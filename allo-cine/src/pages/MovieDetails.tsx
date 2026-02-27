import { useParams } from "react-router"
import { movies } from '../data/movies'
import type { IMovie } from '../interfaces/imovie'
import Movie from '../components/Movie'

const MovieDetails = () => {
    const { id } = useParams()
    const oneMovie = movies.find((movie: IMovie) => movie.id === Number(id))

    if (!oneMovie) {
        return <div>Film introuvable</div>
    }

    return (
        <div>
            ici on display un seul film ! {id}
            <Movie movieData={oneMovie} />
        </div>
    )
}

export default MovieDetails