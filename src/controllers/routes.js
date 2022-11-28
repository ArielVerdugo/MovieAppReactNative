import { Config } from 'react-native-config';

export const routes = {
  authentication: {
    login: '/users',
    logout: '/users/logout',
  },
  movies: {
    getAllMovies: Config.API_BASE_URL + 'discover/movie?api_key=1d1e3eb34d70d120d43954cd81f5915d',
  },
  onlineAuthentication: {
    requestToken:
      'https://api.themoviedb.org/3/authentication/token/new?api_key=1d1e3eb34d70d120d43954cd81f5915d',
    login: Config.API_BASE_URL + 'authentication/token/validate_with_login' + API_KEY,
  },
  sessionId: {
    getSessionId:
      Config.API_BASE_URL +
      'authentication/guest_session/new?api_key=1d1e3eb34d70d120d43954cd81f5915d',
  },
};

export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
const API_KEY = 'api_key=1d1e3eb34d70d120d43954cd81f5915d';
