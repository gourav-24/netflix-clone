// api key fetched from tmdb site
const APIKEY = "9e4a045cd9e6ae5fc2e5a49495a86f54";


// following are the requests provided in tmdb documentation to fetch movies of particlaur categories
const requests = {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies:`/discover/tv?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMovies:`/discover/tv?api_key=${APIKEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/tv?api_key=${APIKEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/tv?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/tv?api_key=${APIKEY}&with_genres=99`,
}

export default requests;