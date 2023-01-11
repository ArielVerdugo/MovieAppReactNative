import { TYPES } from '@/actions/MovieActions';

export const movieReducer = (state = [], { payload, type }) => {
  switch (type) {
    case TYPES.ADD_FAV:
      const arr = [];
      arr.push(payload);
      return [...state, ...arr];
    case TYPES.DELETE_FAV:
      var movies = state.filter((value) => value !== payload);
      return [...movies];
    default:
      return state;
  }
};
