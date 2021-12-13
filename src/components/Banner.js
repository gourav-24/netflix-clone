// rfdc + enter writes basic code for you
import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./request";
import "../css/Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchMovie() {
      console.log("method called");
      const req = await axios.get(requests.fetchTopRated);
      // select movie randomly
      console.log("req>>>>>> ", req);
      console.log(
        "random Movie>>",
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );

      setMovie(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
    }
    fetchMovie();
  }, []);

  console.log("movie>>> ", movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="bannerContent">
        <h1 className="bannerTitle">
          {movie?.title || movie?.name || movie?.original_name}
          {/* ? helps to check if movie is not null so that page dont crash */}
        </h1>
        <div className="bannerButtons">
          <button className="button"> Play </button>
          <button className="button"> My List </button>
        </div>
        <h1 className="movieDescription"> {truncate(movie?.overview, 150)} </h1>
      </div>
      <div className="bannerFadeBottom"></div>
    </header>
  );
}

export default Banner;
