import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesByGenre } from "../../services/api";
import MovieCard from "../MovieCard";

// Styling
import "../../css/ByGenreMovies.css"

function ByGenreMovies() {
  // Getting genreId from UseParam through route we setup
  const { genreId } = useParams();

  //   movie and loading state
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const data = await getMoviesByGenre(genreId);
      //   console.log(data);
      setMovies(data);
      setLoading(false);
    };

    fetchMovies();
  }, [genreId]);
  console.log(genreId);
  return (
    <div>
      {loading ? (
        <p>Loading movies...</p>
      ) : (
        <div className="movies-container">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ByGenreMovies;
