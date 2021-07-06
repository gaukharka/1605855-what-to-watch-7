export const ActionType = {
  CHANGE_GENRE: 'films/changeGenre',
  RESET: 'films/reset',
  LOAD_MOVIES: 'data/loadMovies',
  LOAD_REVIEWS: 'data/loadReviews',
  LOAD_PROMO_MOVIE: 'data/loadPromoMovie',
  LOAD_FAVORITE_MOVIE: 'data/loadFavoriteMovie',
  REQUIRE_AUTHORIZATION: 'user/requireAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'films/redirectToRoute',
  ERROR: 'data/error',
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  reset: () => ({
    type: ActionType.RESET,
  }),
  loadMovies: (movies) => ({
    type: ActionType.LOAD_MOVIES,
    payload: movies,
  }),
  loadPromoMovie: (promoMovie) => ({
    type: ActionType.LOAD_PROMO_MOVIE,
    payload: promoMovie,
  }),
  loadFavoriteMovies: (favoriteMovies) => ({
    type: ActionType.LOAD_FAVORITE_MOVIE,
    payload: favoriteMovies,
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  error: (error) => ({
    type: ActionType.ERROR,
    payload: error,
  }),
};
