const API_KEY = "19f84e11932abbc79e6d83f82d6d1045"
const baseURL = "https://api.themoviedb.org/3"

const requests = {
    fetchTrending:`${baseURL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated:`${baseURL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`${baseURL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
    fetchComedyMovies:`${baseURL}/discover/movie?api_key=${API_KEY}&with_generes=35`,
}

export default requests

