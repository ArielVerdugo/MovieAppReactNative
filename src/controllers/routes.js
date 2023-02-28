import { Config } from 'react-native-config';

export const routes = {
  authentication: {
    login: '/users',
    logout: '/users/logout',
  },
  movies: {
    getAllMovies: Config.API_BASE_URL + 'discover/movie?api_key=' + Config.API_KEY,
  },
  moviesByPage: {
    getMoviesByPage: Config.API_BASE_URL + 'discover/movie?api_key=' + Config.API_KEY + '&page=',
  },
};

export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
