import { useEffect, useState, useContext } from 'react'
import Movie from '../components/Movie'
// import { movies } from '../data/movies'
import type { IMovie } from '../interfaces/imovie'
import { getMovies } from "../api/movies";
import { LuCupSoda } from "react-icons/lu"
import { PiPopcornDuotone } from "react-icons/pi"
import { WishListContext } from '../context/WishListContext'
import SkeletonMovie from '../components/SkeletonMovie'

const Home = () => {

    const [movieName, setMovieName] = useState<string>('')
    const [snack, setSnack] = useState<string[]>([])
    const snackValue = ['PopCorn', 'Coca']
    const [movies, setMovies] = useState<IMovie[]>([])
    const [isLoading, setIsLoading] = useState(true)
    
    const {wishList} = useContext(WishListContext)
    
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
                setTimeout(() => setIsLoading(false), 1000);
            }
            getData()
        } catch (error) {
            console.log('error:', error)
        }
    }, [])

    if (isLoading) {
        return (
            <div>
                <div className='flex items-center justify-center gap-10'>
                    <PiPopcornDuotone onClick={() => handleSnack(snackValue[0])} size={50} />
                    <LuCupSoda onClick={() => handleSnack(snackValue[1])} size={50} />
                    <h2>Vous avez choisi : {snack.join(' - ')}</h2>
                </div>
                <div className='flex items-center justify-center h-screen gap-3.5 flex-wrap mt-10'>
                    {[...Array(20)].map((_, i) => <SkeletonMovie key={i} />)}
                </div>
            </div>
        )
    }

    return (
        <div>
            <p>
                {
                    movieName != '' && (`Vous avez choisi ${movieName}`)
                }
            </p>
            <div className='flex items-center justify-center gap-10'>
                <PiPopcornDuotone onClick={() => handleSnack(snackValue[0])} size={50} />
                <LuCupSoda onClick={() => handleSnack(snackValue[1])} size={50} />
                <h2>Vous avez choisi : {snack.join(' - ')}</h2>
            </div>
            <div className="flex items-center justify-center h-screen gap-3.5 flex-wrap mt-10">
                {
                    movies.length > 0 && movies.map((movie: IMovie) => {
                        const isIn = wishList.some((item: IMovie) => item.id === movie.id)
                        return <Movie key={movie.id} movieData={movie} handleParentClick={getMovie} isInWishList={isIn} />
                    })
                }

            </div>
        </div>
    )
}
export default Home