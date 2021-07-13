import { ActionType } from '../action';
import { INITIAL_GENRE } from '../../consts';

const initialState = {
  genre: INITIAL_GENRE,
  movies: [],
  promoMovie: {},
  favoriteMovies: [],
  isFetching: false,
  error: '',
};

export const movieData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload,
      };
    case ActionType.RESET:
      return {
        ...initialState,
      };
    case ActionType.LOAD_MOVIES:
      return {
        ...state,
        movies: action.payload,
        isFetching: true,
      };
    case ActionType.LOAD_PROMO_MOVIE:
      return {
        ...state,
        promoMovie: action.payload,
        isFetching: true,
      };
    case ActionType.LOAD_FAVORITE_MOVIES:
      return {
        ...state,
        favoriteMovies: action.payload,
        isFetching: true,
      };
    case ActionType.ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
