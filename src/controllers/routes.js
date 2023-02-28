import { Config } from 'react-native-config';

export const routes = {
  authentication: {
    login: '/users',
    logout: '/users/logout',
  },
  movies: {
    getAllMovies: 'discover/movie?api_key=',
  },
  moviesByPage: {
    getMoviesByPage: '&page=',
  },
};

export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
