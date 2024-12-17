import React, { useEffect, useState } from "react";
import { getAllGenres, getMoviesByGenre } from "../services/api";

// Styling
import "../css/GenresNavbar.css";
import { useNavigate } from "react-router-dom";

function GenresNavbar() {
  // For navigating routes
  const navigate = useNavigate();

  // To store genres
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const data = await getAllGenres();

      setGenres(data.genres);
      console.log(genres);
    };
    fetchGenres();
  }, []);

  const onGenreClick = async (genre_id) => {
    navigate(`genre/${genre_id}`);
  };
  return (
    <div className="genres-navbar">
      {genres.map((genre) => (
        <button
          key={genre.id}
          className="genre-button"
          onClick={() => onGenreClick(genre.id)}>
          {genre.name}
        </button>
      ))}
    </div>
  );
}

export default GenresNavbar;
