import { loadMovies,loadPromoMovie, loadFavoriteMovies, loadReviews, requireAuthorization, redirectToRoute, logout as closeSession, error, loadMovie } from './action';
import { AuthorizationStatus, APIRoutes, AppRoutes } from '../consts';
import { adaptDataToMovie, adaptDataToMovies } from '../services/adaptors';

export const fetchMovieList = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.MOVIES)
    .then(({data})=> dispatch(loadMovies(adaptDataToMovies(data))))
    .catch((err) => dispatch(error(err.message)))
);

export const fetchPromoMovie = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.PROMO_MOVIE)
    .then(({data})=> dispatch(loadPromoMovie(adaptDataToMovie(data))))
    .catch((err) => dispatch(error(err.message)))
);

export const fetchFavoriteMovieList = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.FAVORITE_MOVIE)
    .then(({data})=> dispatch(loadFavoriteMovies(adaptDataToMovies(data))))
    .catch((err) => dispatch(error(err.message)))
);

export const fetchReviewList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoutes.GET_COMMENTS}/${id}`)
    .then(({data})=> dispatch(loadReviews(data)))
    .catch((err) => dispatch(error(err.message)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => dispatch(error(err.message)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoutes.LOGIN, {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoutes.ROOT)))
    .catch((err) => dispatch(error(err.message)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoutes.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(closeSession()))
);

export const postReview = (id, review, history) => (dispatch, _getState, api) => (
  api.post(`${APIRoutes.GET_COMMENTS}/${id}`, {...review})
    .then(({data}) => history.goBack())
    .catch((err) => dispatch(error(err.message)))
);

export const updateFavoriteStatus = (id, movie, promo, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoutes.FAVORITE_MOVIE}/${id}`)
    .then((data) => {
      data === movie ? dispatch(loadMovie(adaptDataToMovie(data))) : dispatch(loadPromoMovie(adaptDataToMovie(data)));
    })
);
