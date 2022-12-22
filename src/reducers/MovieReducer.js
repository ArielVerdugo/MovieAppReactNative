import { TYPES } from '@/actions/MovieActions';

export const movieReducer = (state = [], { payload, type }) => {
  switch (type) {
    case TYPES.ADD_FAV:
      const arr = [];
      arr.push(payload);
      return [...state, ...arr];
    case TYPES.DELETE_FAV:
      const index = state.indexOf(payload);
      state.splice(index, 1);
      // no modificar el array, generar uno nuevo FILTER
      return [...state];
    default:
      return state;
  }
};
