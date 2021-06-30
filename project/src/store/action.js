export const ActionType = {
  CHANGE_GENRE: 'films/changeGenre',
  GET_MOVIES: 'films/getFilm',
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
  reset: () => ({
    type: ActionType.RESET,
  }),
};
