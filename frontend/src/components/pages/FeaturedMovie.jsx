import { useEffect, useState } from "react";
import { getPopularMovies } from "../../services/api";
import "../../css/FeaturedMovie.css";

function FeaturedMovie() {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovie = await getPopularMovies();
        setMovie(popularMovie[8]);
      } catch (err) {
        setError("Failed to load movies....");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  return (
    <div className="column featured_wrapper">
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="featured" alt={movie.title}/>
      <div className="title_wrapper">
        <span className="has-text-white">Trending Today</span>
        <h1 className="title has-text-white">
          {movie.title}
        </h1>
        <p className="featured-overview">{movie.overview}</p>
        <button className="f-button">Watch It Now</button>
      </div>
    </div>
  );
}

export default FeaturedMovie;
