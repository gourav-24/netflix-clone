import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const movieImageBaseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  // hooks
  console.log("fetchURL", fetchURL);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const req = await axios.get(fetchURL);
      console.log("req>>> ", req);
      console.log("req.data.results", req.data.results);
      setMovies(req.data.results);
      return req;
    }
    fetchMovies();
  }, [fetchURL]);

  console.log("movies", movies);

  // if [] , run onnce the row loads and dont run it means it only runs on page load

  return (
    <div className="row">
      {/* tilte*/}
      <h2> {title} </h2>
      <div className="rowMovies">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`moviePoster ${isLargeRow && "largePoster"}`}
            src={`${movieImageBaseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>

      {/* poster */}
    </div>
  );
}

export default Row;
