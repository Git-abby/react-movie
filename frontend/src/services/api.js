
const API_KEY = "470b1512564ce57c61efb80b960bbcae";
const BASE_URL = "https://api.themoviedb.org/3";


// TO gell the genres
export const getAllGenres = async () => {
  const response = await fetch(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};

// To find movie by genres
export const getMoviesByGenre = async (genreId) => {
  const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`);
  const data = await response.json();
  return data.results; // Returns an array of movies
};


// TO gel all popular movies
export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

// To search movie by name
export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};

// https://api.themoviedb.org/3/movie/1182387?language=en-US
export const movieDetails = async (movie_id) => {
  const response = await fetch(
    `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}`
  );
  const data = await response.json();
  // console.log(data)
  return data;
};
