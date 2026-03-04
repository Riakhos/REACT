import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home"
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import MyList from "./pages/MyList"
import NavigationBar from "./components/NavigationBar"
import MovieDetails from "./pages/MovieDetails"
import CounterProvider from "./context/CounterProvider"
import WishListProvider from "./context/WishListProvider"

const App = () => {

    return (
        <WishListProvider>
            <CounterProvider>
                <BrowserRouter>
                    <NavigationBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/my-list" element={<MyList />} />
                        <Route path="/movies/:id" element={<MovieDetails />} />
                    </Routes>
                </BrowserRouter>
            </CounterProvider>
        </WishListProvider>
    )
}

export default App