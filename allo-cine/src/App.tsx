import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import MyList from "./pages/MyList";
import NavigationBar from "./components/NavigationBar";
import MovieDetails from "./pages/MovieDetails";

const App = () => {

    return (
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
    )
}

export default App