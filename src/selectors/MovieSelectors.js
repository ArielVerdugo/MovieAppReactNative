export const getFavoriteMovies = (state) => {
  return Object.keys(state.movie).length > 0 ? state.movie : [];
};
