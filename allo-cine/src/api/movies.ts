import axios from "axios";

// GET all
export const getMovies = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=2";
  const options = {
    headers: {
      "Content-type": "Application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODY2ZjkyNGMzM2VkNjcwODk0Mjk3NjVjYWExYTFiMiIsIm5iZiI6MTYyMzk0OTU4OC40OTUwMDAxLCJzdWIiOiI2MGNiODExNDg3ZTYzZTAwMjg1YjcxZWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.QKmfs1G9qck7uv918an9zIMfoz9IRyLq43fS2L7qOEA",
    },
  };
  const movies = await axios.get(url, options);
  if (movies.status === 200) {
    return movies.data.results;
  }
};

// GET id