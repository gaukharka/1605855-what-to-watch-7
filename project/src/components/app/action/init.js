import {checkAuth, fetchMovieList, fetchPromoMovie, fetchFavoriteMovieList} from '../../../store/api-actions';

export const init = () => (dispatch) => {
  dispatch(checkAuth());
  dispatch(fetchMovieList());
  dispatch(fetchPromoMovie());
  dispatch(fetchFavoriteMovieList());
};
