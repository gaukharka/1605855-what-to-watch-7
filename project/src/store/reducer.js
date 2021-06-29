import {INITIAL_GENRE, MAX_MOVIES_SHOWN} from '../consts.js';
import {ActionType} from './action.js';
import movies from './../mocks/movies';

const movieList = movies.filter((movie) => movie.isPromo === false);

const initialState = {
  genre: INITIAL_GENRE,
  movies: movieList,
  filteredMovies: movieList,
  maxCountOfMoviesShown: MAX_MOVIES_SHOWN,
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
    case ActionType.GET_MAX_COUNT_OF_MOVIES:
      return {
        ...state,
        maxCountOfMoviesShown: Math.min(state.filteredMovies.length, state.maxCountOfMoviesShown + MAX_MOVIES_SHOWN),
      };
    case ActionType.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
