import {INITIAL_GENRE, AuthorizationStatus} from '../consts.js';
import {ActionType} from './action.js';

const initialState = {
  genre: INITIAL_GENRE,
  movies: [],
  promoMovie: [],
  favoriteMovies: [],
  reviews: [],
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isMovieListLoaded: false,
  isPromoMovieLoaded: false,
  isReviewListLoaded: false,
  isFavoriteListLoaded: false,
  error: '',
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
    case ActionType.LOAD_MOVIES:
      return {
        ...state,
        movies: action.payload,
        isMovieListLoaded: true,
      };
    case ActionType.LOAD_PROMO_MOVIE:
      return {
        ...state,
        promoMovie: action.payload,
        isPromoMovieLoaded: true,
      };
    case ActionType.LOAD_FAVORITE_MOVIES:
      return {
        ...state,
        favoriteMovies: action.payload,
        isFavoriteListLoaded: true,
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        isReviewListLoaded: true,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
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
