import React from "react";

const GenreFilter = ({ genres }) => {
  const handleClick = (genre) => {
    console.log(`Filtering by ${genre}`);
  };

  return (
    <div className="genre-filter-section">
      <h2 className="filter-label">Filter by Genre</h2>
      <div className="genre-buttons">
        {genres.map((genre, index) => (
          <button
            key={index}
            className="genre-btn"
            onClick={() => handleClick(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreFilter;
