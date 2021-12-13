import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import axios from "./axios";
import "../css/Row.css";
import urlKeys from "./uniqueKeys";
const movieImageBaseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  // hooks
  //console.log("fetchURL", fetchURL);
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // if [] , run onnce the row loads and dont run it means it only runs on page load
  useEffect(() => {
    async function fetchMovies() {
      const req = await axios.get(fetchURL);
      //console.log("req>>> ", req);
      console.log("req.data.results", req.data.results);
      setMovies(req.data.results);
      return req;
    }
    fetchMovies();
  }, [fetchURL]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  // handleClick to play a video
  const handleClick = (movie) => {
    // if video is already playing
    if (document.getElementById("videoPlayer")) {
      document.getElementById("videoPlayer").remove();
    }
    if (trailerUrl) {
      console.log("trilerUrl");
      setTrailerUrl("");
      document.getElementById("videoPlayer");
    }

    // fetch trailer of movie
    movieTrailer(movie?.name || "")
      .then((url) => {
        let key = movie.name;
        if (!key) {
          key = movie.title;
        }

        if (urlKeys[key]) {
          setTrailerUrl(urlKeys[key]);
        } else if (url) {
          let urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        } else {
          setTrailerUrl("");
        }
      })
      .catch((err) => console.log("error: ", err));
  };

  return (
    <div className="row">
      {/* tilte*/}
      <h2> {title} </h2>
      <div className="rowMovies">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => {
              console.log("clicked");
              handleClick(movie);
            }}
            className={`moviePoster ${isLargeRow && "largePoster"}`}
            src={`${movieImageBaseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && (
        <YouTube id="videoPlayer" videoId={trailerUrl} opts={opts} />
      )}

      {/* poster */}
    </div>
  );
}

export default Row;
