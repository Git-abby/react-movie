import { useMovieContext } from "../contexts/MovieContexts";
import "../css/MovieCard.css";

// if you write export before function name: it's gonna named export nnot default export
// like this export fun funName()

function MovieCard({ movie }) {
  const { isFavorites, addToFavorites, removeFromFavorites } =
    useMovieContext();
    const favorite = isFavorites(movie.id)

  function onFavoriteClick(e) {
    e.preventDefault()
    if(favorite) removeFromFavorites(movie.id)
    else addToFavorites(movie)

  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
            ❤️
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
