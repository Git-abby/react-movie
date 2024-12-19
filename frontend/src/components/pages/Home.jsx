import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../../services/api";
import MovieCard from "../MovieCard";
import "../../css/Home.css";
import FeaturedMovie from "./FeaturedMovie";
import { useMovieContext } from "../../contexts/MovieContexts";

//React- toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Firebase Auth state
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../services/firebase";

function Home() {
  //USER INFO
  const [user, setUser] = useState(null);

  //When state change occurs, entire compo is reran or re-rendered
  const [searchQuery, setSearchQuery] = useState("");

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  // // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    //Clean up subscription
    return () => unsubscribe();
  }, []);
 useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        // console.log(popularMovies[9])
        setMovies(popularMovies);
      } catch (err) {
        setError("Failed to load movies....");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);

    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      setError("Failed to search movie...");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
      <FeaturedMovie />
      <form onSubmit={handleSearch} action="" className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && <div className="error-message">{error} </div>}
      {loading ? (
        <div className="loading"> loading... </div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
