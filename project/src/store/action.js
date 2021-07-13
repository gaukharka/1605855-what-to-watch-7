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
};

export const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre,
});

export const reset = () => ({
  type: ActionType.RESET,
});

export const loadMovies = (movies) => ({
  type: ActionType.LOAD_MOVIES,
  payload: movies,
});

export const loadPromoMovie = (promoMovie) => ({
  type: ActionType.LOAD_PROMO_MOVIE,
  payload: promoMovie,
});

export const loadFavoriteMovies = (favoriteMovies) => ({
  type: ActionType.LOAD_FAVORITE_MOVIES,
  payload: favoriteMovies,
});

export const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRE_AUTHORIZATION,
  payload: status,
});

export const logout = () => ({
  type: ActionType.LOGOUT,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const error = (err) => ({
  type: ActionType.ERROR,
  payload: err,
});
