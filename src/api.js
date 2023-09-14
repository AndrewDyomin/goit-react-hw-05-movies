import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '3f955bfad54d72f2cddc18f40e0a573a';
const options = {
  params: {
    api_key: API_KEY,
  },
}
const getTrending = '/trending/movie/day';
const getMovie = '/movie';

export const getTrendList = async () => {
    const response = await axios.get(`${getTrending}`, options);
    return(response.data.results);
};

export const getMovieDetails = async (movieId) => {
  const response = await axios.get(`${getMovie}/${movieId}`, options);
  return(response.data);
};