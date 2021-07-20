import { checkAuth, fetchMovieList, fetchPromoMovie, setFetchStatus } from '../../../store/api-actions';

export const init = () => async (dispatch) => {
  dispatch(setFetchStatus(true));
  await dispatch(checkAuth());
  await dispatch(fetchMovieList());
  await dispatch(fetchPromoMovie());
  dispatch(setFetchStatus(false));
};
