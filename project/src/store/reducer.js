import {INITIAL_GENRE} from '../consts.js';
import {ActionType} from './action.js';
import movies from './../mocks/movies';

const movieList = movies.filter((movie) => movie.isPromo === false);

const initialState = {
  genre: INITIAL_GENRE,
  movies: movieList,
  filteredMovies: movieList,
};

export const reducer = (state = initialState, action) => {
  /* eslint-disable no-console */
  console.log(action);
  console.log(state.movies);
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload,
      };
    case ActionType.GET_MOVIES:
      return {
        ...state,
        filteredMovies: state.genre === INITIAL_GENRE ? state.movies : state.movies.filter((movie) => movie.genre === state.genre),
      };
    case ActionType.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
