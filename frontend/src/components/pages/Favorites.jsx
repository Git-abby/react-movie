import "../../css/Favorites.css";
import { useMovieContext } from "../../contexts/MovieContexts";
import MovieCard from "../MovieCard";
import { ToastContainer } from "react-toastify";

function Favorites() {
  const { favorites } = useMovieContext();

  return (
    <>
      {favorites && favorites.length > 0 ? (
        <div className="favorites">
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
          <h2 className="favorites-title">Your Favorites</h2>
          <div className="movies-grid">
            {favorites.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      ) : (
        <div className="favorites-empty">
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
          <h2>No Favorite Movies Yet</h2>
          <p>
            Start adding movies to your favorites and they will appear here...
          </p>
        </div>
      )}
    </>
  );
}

export default Favorites;
