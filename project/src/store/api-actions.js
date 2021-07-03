import {ActionCreator} from './action';
import {AuthorizationStatus, APIRoutes} from '../consts';
import {adaptDataToMovie, adaptDataToMovies} from '../services/adaptors';

export const fetchMovieList = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.MOVIES)
    .then(({data})=> dispatch(ActionCreator.loadMovies(adaptDataToMovies(data))))
    .catch((error) => dispatch(ActionCreator.error(error.message)))
);

export const fetchPromoMovie = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.PROMO_MOVIE)
    .then(({data})=> dispatch(ActionCreator.loadPromoMovie(adaptDataToMovie(data))))
    .catch((error) => dispatch(ActionCreator.error(error.message)))
);

export const fetchFavoriteMovieList = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.FAVORITE_MOVIES)
    .then(({data})=> dispatch(ActionCreator.loadFavoriteMovies(adaptDataToMovies(data))))
    .catch((error) => dispatch(ActionCreator.error(error.message)))
);

export const fetchReviewList = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.REVIEWS)
    .then(({data})=> dispatch(ActionCreator.loadReviews(data)))
    .catch((error) => dispatch(ActionCreator.error(error.message)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoutes.LOGIN, {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoutes.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.LOGOUT))
);
