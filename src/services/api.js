import axios from 'axios';

const API_KEY = '8ed67c56e71e499906dccb56001b628e';
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getPopularMovies = () => {
  return api.get('/movie/popular');
};

export const searchMovies = (query) => {
  return api.get('/search/movie', {
    params: {
      query,
    },
  });
};

export const getMovieDetails = (movieId) => {
  return api.get(`/movie/${movieId}`);
};

export default api;
