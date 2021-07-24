import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_GENRE: 'films/changeGenre',
  RESET: 'films/reset',
  RESET_GENRE: 'films/resetGenre',
  RESET_MAX_MOVIES_SHOWN: 'films/resetMaxMoviesShown',
  LOAD_MOVIES: 'data/loadMovies',
  LOAD_REVIEWS: 'data/loadReviews',
  LOAD_PROMO_MOVIE: 'data/loadPromoMovie',
  LOAD_FAVORITE_MOVIES: 'data/loadFavoriteMovie',
  REQUIRE_AUTHORIZATION: 'user/requireAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'films/redirectToRoute',
  ERROR: 'data/error',
  FETCHING_STATUS: 'data/fetchingStatus',
  LOAD_MOVIE: 'data/loadMovie',
  UPDATE_MOVIE: 'data/updateMovie',
  POST_REVIEWS: 'data/postReview',
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

export const requireAuthorization = createAction(ActionType.REQUIRE_AUTHORIZATION, (status, user) => ({
  payload: {
    authStatus: status,
    authInfo: user,
  },
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

export const updateFilm = createAction(ActionType.UPDATE_MOVIE, (movie) => ({
  payload: movie,
}));

export const setReviewIsSending = createAction(ActionType.POST_REVIEWS, (isSending) => ({
  payload: isSending,
}));

export const resetGenreToInitial = createAction(ActionType.RESET_GENRE);

export const resetMaxMoviesShown = createAction(ActionType.RESET_MAX_MOVIES_SHOWN);
