import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_GENRE: 'films/changeGenre',
  RESET: 'films/reset',
  LOAD_MOVIES: 'data/loadMovies',
  LOAD_REVIEWS: 'data/loadReviews',
  LOAD_PROMO_MOVIE: 'data/loadPromoMovie',
  LOAD_FAVORITE_MOVIES: 'data/loadFavoriteMovie',
  REQUIRE_AUTHORIZATION: 'user/requireAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'films/redirectToRoute',
  ERROR: 'data/error',
  FETCHING_STATUS: 'data/fetchingStatus',
};

export const changeGenre = createAction(ActionType.CHANGE_GENRE, (genre) => ({
  payload: genre,
}));
export const reset = createAction(ActionType.RESET);
export const loadMovies = createAction(ActionType.LOAD_MOVIES, (movies) => ({
  payload: movies,
}));
export const loadPromoMovie = createAction(ActionType.LOAD_PROMO_MOVIE, (promoMovie) => ({
  payload: promoMovie,
}));
export const loadFavoriteMovies = createAction(ActionType.LOAD_FAVORITE_MOVIES, (favoriteMovies) => ({
  payload: favoriteMovies,
}));
export const loadReviews = createAction(ActionType.LOAD_REVIEWS, (reviews) => ({
  payload: reviews,
}));
export const requireAuthorization = createAction(ActionType.REQUIRE_AUTHORIZATION, (status) => ({
  payload: status,
}));
export const logout = createAction(ActionType.LOGOUT);
export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));
export const error = createAction(ActionType.ERROR, (err) => ({
  payload: err,
}));

export const setStatus = createAction(ActionType.FETCHING_STATUS, (isFetching) => ({
  payload: isFetching,
}));
