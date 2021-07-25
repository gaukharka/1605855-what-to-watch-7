import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { updateMovie, updateMovies, fetchPromoMovie, fetchMovieList } from '../../store/api-actions';
import { useHistory } from 'react-router';
import { AppRoutes, AuthorizationStatus } from '../../consts';
import { getAuthorizationStatus } from '../../store/user/selectors';
import { moviePropTypes } from '../../prop-types/movie-prop-types';

function MyListButton(props) {
  const {movie} = props;
  const dispatch = useDispatch();

  const allData = () => {
    dispatch(fetchPromoMovie());
    dispatch(fetchMovieList());
  };

  const history = useHistory();
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const onMyListReroute = () => history.push(`${AppRoutes.LOGIN}`);

  const onMyListClick = () => {
    if(movie.id !== 1){
      dispatch(updateMovies(movie.id, movie.isFavorite ? 0 : 1));
      allData();
    }
    dispatch(updateMovie(movie.id, movie.isFavorite ? 0 : 1));
    allData();
  };

  const onButtonClick = () => authorizationStatus === AuthorizationStatus.AUTH ? onMyListClick : onMyListReroute;

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={onButtonClick()}
    >
      {movie.isFavorite ?
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg> :
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>}
      <span>My list</span>
    </button>
  );
}

MyListButton.propTypes = {
  movie: moviePropTypes,
};

export default MyListButton;
