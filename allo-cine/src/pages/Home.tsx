import { useState } from 'react'
import Movie from '../components/Movie'
import { movies } from '../data/movies'
import type { IMovie } from '../interfaces/imovie'
import { LuCupSoda } from "react-icons/lu"
import { PiPopcornDuotone } from "react-icons/pi"

const Home = () => {

    const [movieName, setMovieName] = useState<string>('')
    const [snack, setSnack] = useState<string[]>([])
    
    const getMovie = (myMovie: IMovie) => {
        setMovieName(myMovie.title)
    }
    const handleSnack = (mySnack: string) => {
        if (!snack.includes(mySnack)) {
            setSnack([...snack, mySnack])
        }
    }

    return (
        <div data-theme="light black">
            <p>
                {
                    movieName != '' && (`Vous avez choisi ${movieName}`)
                }
            </p>
            <div className='flex items-center justify-start'>
                <PiPopcornDuotone onClick={() => handleSnack('Pop corn')} size={50} />
                <LuCupSoda onClick={() => handleSnack('Coca')} size={50} />
                <h2>Vous avez choisi: {snack.join(' - ')}</h2>
            </div>
            <div className="flex items-center justify-center h-screen gap-3.5 flex-wrap mt-10">
                {
                    movies.length > 0 && movies.map((movie: IMovie) => (
                        <Movie key={movie.id} movieData={movie} handleParentClick={getMovie} />
                    ))
                }

            </div>
        </div>
    )
}
export default Home