export const ActionType = {
  CHANGE_GENRE: 'films/changeGenre',
  GET_MOVIES: 'films/getFilm',
  GET_MAX_COUNT_OF_MOVIES: 'films/getMaxCountOfFilms',
  RESET_MAX_COUNT_OF_MOVIES: 'films/resetMaxCountOfFilms',
  RESET: 'films/reset',
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  getMovies: () => ({
    type: ActionType.GET_MOVIES,
  }),
  getMaxCountOfMovies: () => ({
    type: ActionType.GET_MAX_COUNT_OF_MOVIES,
  }),
  resetMaxCountOfMovies: () => ({
    type: ActionType.RESET_MAX_COUNT_OF_MOVIES,
  }),
  reset: () => ({
    type: ActionType.RESET,
  }),
};
