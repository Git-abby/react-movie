import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieDetails } from "../../services/api";
import "../../css/SingleMovie.css"

const SingleMovie = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await movieDetails(movieId);
        console.log(data);
        setMovie(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);

  return (
    <div className="single-movie">
      <div className="image-holder">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          style={{ width: "100%", maxWidth: "500px", borderRadius: "10px" }}
        />
      </div>
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p>
          <strong>Release Date: </strong> {movie.release_date?.split('-')[0]}
        </p>
        <p>
          <strong>Rating: </strong> {movie.vote_average} / 10
        </p>
        <p>
          <strong>Overview: </strong> {movie.overview}
        </p>
        
      </div>
    </div>
  );
};

export default SingleMovie;
