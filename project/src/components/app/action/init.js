import { checkAuth, fetchMovieList, fetchPromoMovie } from '../../../store/api-actions';

export const init = () => (dispatch) => {
  dispatch(checkAuth());
  dispatch(fetchMovieList());
  dispatch(fetchPromoMovie());
};
