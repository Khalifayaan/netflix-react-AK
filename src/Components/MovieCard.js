



import React from "react";

function MovieCard({ name, rating, type, site }) {
  return (
    <div className="movie-card">
      <div className="movie-image">
        <img src={site} alt="movie" />
      </div>
      <h3 className="movie-heading">{name}</h3>
      <p>Rating: {rating}</p>
      <p>Type: {type}</p>
    </div>
  );
}

export default MovieCard;


