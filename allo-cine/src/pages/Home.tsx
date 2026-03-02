import { useEffect, useState } from 'react'
import Movie from '../components/Movie'
// import { movies } from '../data/movies'
import type { IMovie } from '../interfaces/imovie'
import { LuCupSoda } from "react-icons/lu"
import { PiPopcornDuotone } from "react-icons/pi"
import { getMovies } from "../api/movies";

const Home = () => {

    const [movieName, setMovieName] = useState<string>('')
    const [snack, setSnack] = useState<string[]>([])
    const snackValue = ['PopCorn', 'Coca']
    const [movies, setMovies] = useState<IMovie[]>([])
    
    const getMovie = (myMovie: IMovie) => {
        setMovieName(myMovie.title)
    }
    const handleSnack = (mySnack: string) => {
        if (!snack.includes(mySnack)) {
            setSnack([...snack, mySnack])
        }
    }

    // fetch
    // useEffect(() => {
    //   const url = 'https://jsonplaceholder.typicode.com/users'
    //   fetch(url)
    //   .then(response => response.json())
    //   .then((data) => {
    //     console.log(data)
    //   })    
    // }, [])
    
    // async et await
    useEffect(() => {
    //   const getUsers1 = async () => {
    //     const url = 'https://jsonplaceholder.typicode.com/users'
    //     const users = await fetch(url)
    //     const usersJson = await users.json()
    //     console.log(usersJson)
    //   }
    //   getUsers1()
    //     const getUsers = async () => {
    //         const url = 'https://jsonplaceholder.typicode.com/users'
    //         const responseFromServer = await axios.get(url)
    //         console.log(responseFromServer)
    //     }
    //     getUsers()

    try {
        const getData = async () => {
            const moviesFromBack = await getMovies()
            setMovies(moviesFromBack)
        }
        getData()
    } catch (error) {
        console.log('error:', error)
    }
    }, [])

    // loading (DaisyUI loader ou skeleton)
    // button 'Voir plus'

    return (
        <div data-theme="light black">
            <p>
                {
                    movieName != '' && (`Vous avez choisi ${movieName}`)
                }
            </p>
            <div className='flex items-center justify-start'>
                <PiPopcornDuotone onClick={() => handleSnack(snackValue[0])} size={50} />
                <LuCupSoda onClick={() => handleSnack(snackValue[1])} size={50} />
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