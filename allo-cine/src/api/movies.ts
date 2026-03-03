import axios from "axios";

// GET all
export const getMovies = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=2";
  const options = {
    headers: {
      "Content-type": "Application/json",
      Authorization:
        `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
    },
  };
  const movies = await axios.get(url, options);
  if (movies.status === 200) {
    return movies.data.results;
  }
};

// GET id
export const getMovie = async () => {
  const url = `https://api.themoviedb.org/3/movie/movie_id`;
  const options = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
    },
  };
  const movie = await axios.get(url, options);
  if (movie.status === 200) {
    return movie.data;
  }
}