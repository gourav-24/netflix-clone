import axios from "axios";

// folllowing is the base url to make request to fetch movies from tmdb

const reqURL = axios.create({
    baseURL:"https://api.themoviedb.org/3"

});

export default reqURL;