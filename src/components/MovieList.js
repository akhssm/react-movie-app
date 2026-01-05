import React from "react";

const MovieList = ({ movies }) => {
  return (
    <table className="movie-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie, index) => (
          <tr key={index} className={index % 2 === 0 ? "even-row" : ""}>
            <td>{movie.title}</td>
            <td>{movie.genre}</td>
            <td>{movie.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MovieList;
