import React from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import { getPromoMovie, getMovies } from '../../store/movie-data/selectors';
import { fetchPromoMovie, fetchMovieList, updateFavoriteStatus } from '../../store/api-actions';
import { useHistory } from 'react-router';
import { AppRoutes, AuthorizationStatus } from '../../consts';
import { getAuthorizationStatus } from '../../store/user/selectors';

function MyListButton(props) {
  const {id} = props;

  const movies = useSelector(getMovies);
  const [movie] = movies.filter((item) => item.id === id);

  const dispatch = useDispatch();
  const promoMovie = useSelector(getPromoMovie);

  const isPromoFavorite = promoMovie && promoMovie.id === +id;
  const isMovieFavorite = movie && movie.id === +id;
  const history = useHistory();
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const onMyListReroute = () => history.push(`${AppRoutes.LOGIN}`);

  const isFavorite = isPromoFavorite ? promoMovie.isFavorite : movie.isFavorite;

  const onMyListClick = () => {
    dispatch(updateFavoriteStatus(id, isMovieFavorite, isPromoFavorite, isFavorite ? 0 : 1));
    dispatch(fetchPromoMovie());
    dispatch(fetchMovieList());
  };

  const onButtonClick = () => authorizationStatus === AuthorizationStatus.AUTH ? onMyListClick : onMyListReroute;

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={onButtonClick()}
    >
      {isFavorite ?
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
  id: PropTypes.number.isRequired,
};

export default MyListButton;
