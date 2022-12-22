export const getFav = (state) => {
  return Object.keys(state.movie).length > 0 ? state.movie : null;
};
