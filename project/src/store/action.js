export const ActionType = {
  CHANGE_GENRE: 'films/changeGenre',
  GET_MOVIES: 'films/getFilm',
  RESET: 'films/reset',
  LOAD_MOVIES: 'data/loadMovies',
  LOAD_REVIEWS: 'data/loadReviews',
  LOAD_PROMO_MOVIE: 'data/loadPromoMovie',
  LOAD_FAVORITE_MOVIE: 'data/loadFavoriteMovie',
  REQUIRED_AUTHORIZATION: 'user/requireAuthorization',
  LOGOUT: 'user/logout',
  ERROR: 'data/error',
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  getMovies: () => ({
    type: ActionType.GET_MOVIES,
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
    type: ActionType.LOAD_MOVIES,
    payload: reviews,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  error: (error) => ({
    type: ActionType.ERROR,
    payload: error,
  }),
};
