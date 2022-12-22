/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
export const TYPES = {
  ADD_FAV: 'ADD_FAV',
  DELETE_FAV: 'DELETE_FAV',
};


const addFav = (movie) => ({
    type: TYPES.ADD_FAV,
    payload: movie,
  });

const extractFav = (movie) => ({
    type: TYPES.DELETE_FAV,
    payload: movie,
});


export const saveMovie = (movieFav) =>(dispatch)=>{
    dispatch(addFav(movieFav));
};

export const deleteMovie = (movieFav) =>(dispatch)=>{
    dispatch(extractFav(movieFav));
};

