import { Link } from "react-router-dom";
import { useMovieContext } from "../contexts/MovieContexts";
import "../css/MovieCard.css";
import { toast } from "react-toastify";

// if you write export before function name: it's gonna named export nnot default export
// like this export fun funName()

function MovieCard({ movie }) {
  const { isFavorites, addToFavorites, removeFromFavorites } =
    useMovieContext();
  const favorite = isFavorites(movie.id);

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(movie.id);
      toast.info(`${movie.title.toUpperCase()} removed from Favorites❤️`);
    } else {
      addToFavorites(movie);
      toast.success(`${movie.title.toUpperCase()} added to Favorites❤️`);
    }
  }

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movie-overlay">
            <button
              className={`favorite-btn ${favorite ? "active" : ""}`}
              onClick={onFavoriteClick}>
              ❤️
            </button>
          </div>
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date?.split("-")[0]}</p>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
