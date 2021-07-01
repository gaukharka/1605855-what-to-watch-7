import {INITIAL_GENRE} from '../consts.js';
import {ActionType} from './action.js';
import movies from './../mocks/movies';
import reviews from '../mocks/reviews.js';

const initialState = {
  genre: INITIAL_GENRE,
  movies: movies,
  reviews: reviews,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload,
      };
    case ActionType.GET_MOVIES:
      return {
        ...state,
        movies: state.movies,
      };
    case ActionType.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
