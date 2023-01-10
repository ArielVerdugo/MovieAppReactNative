export const TYPES = {
  ADD_FAV: 'ADD_FAV',
  DELETE_FAV: 'DELETE_FAV',
};

const addFavouriteMovie = (movie) => ({
  type: TYPES.ADD_FAV,
  payload: movie,
});

const extractFavouriteMovie = (movie) => ({
  type: TYPES.DELETE_FAV,
  payload: movie,
});

export const saveMovie = (movieFav) => (dispatch) => {
  dispatch(addFavouriteMovie(movieFav));
};

export const deleteMovie = (movieFav) => (dispatch) => {
  dispatch(extractFavouriteMovie(movieFav));
};
