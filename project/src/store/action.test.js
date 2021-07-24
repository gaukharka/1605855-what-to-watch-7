import {
  changeGenre,
  reset,
  loadMovies,
  loadPromoMovie,
  loadFavoriteMovies,
  loadReviews,
  setStatus,
  updateFilm,
  requireAuthorization,
  redirectToRoute,
  logout,
  resetGenreToInitial,
  ActionType
} from './action';

import { AuthorizationStatus } from '../consts';

describe('Actions', () => {
  it('Action creator for genre change returns correct action', () => {
    const genre = 'drama';

    const expectedAction = {
      type: ActionType.CHANGE_GENRE,
      payload: genre,
    };

    expect(changeGenre(genre)).toEqual(expectedAction);
  });

  it('Action creator for reset returns correct action', () => {
    const expectedAction = {
      type: ActionType.RESET,
    };

    expect(reset()).toEqual(expectedAction);
  });

  it('Action creator for loading movies returns correct action', () => {
    const movies = [{id:1}, {id:2}, {id:3}];

    const expectedAction = {
      type: ActionType.LOAD_MOVIES,
      payload: movies,
    };

    expect(loadMovies(movies)).toEqual(expectedAction);
  });

  it('Action creator for loading promo movie returns correct action', () => {
    const promoMovie = {id:1, name: 'name'};

    const expectedAction = {
      type: ActionType.LOAD_PROMO_MOVIE,
      payload: promoMovie,
    };

    expect(loadPromoMovie(promoMovie)).toEqual(expectedAction);
  });

  it('Action creator for loading favorite movies returns correct action', () => {
    const favoriteMovies = [{id:1}, {id:2}, {id:3}];

    const expectedAction = {
      type: ActionType.LOAD_FAVORITE_MOVIES,
      payload: favoriteMovies,
    };

    expect(loadFavoriteMovies(favoriteMovies)).toEqual(expectedAction);
  });

  it('Action creator for loading reviews returns correct action', () => {
    const reviews = [{id:1, comment: 'comment1'}, {id:2, comment: 'comment2'}];

    const expectedAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };

    expect(loadReviews(reviews)).toEqual(expectedAction);
  });

  it('Action for setting status returns correct action', () => {
    const expectedAction = {
      type: ActionType.FETCHING_STATUS,
    };

    expect(setStatus()).toEqual(expectedAction);
  });

  it('Action creator for updating movie returns correct action', () => {
    const expectedAction = {
      type: ActionType.UPDATE_MOVIE,
    };

    expect(updateFilm()).toEqual(expectedAction);
  });

  it('Action creator for authorization with AUTH retursn correct action', () => {
    const user = {
      login: 'asd@gmail.com',
      password: '12345',
    };

    const expectedAction = {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload:  {
        authStatus: AuthorizationStatus.AUTH,
        authInfo: user,
      },
    };

    expect(requireAuthorization(AuthorizationStatus.AUTH, user)).toEqual(expectedAction);
  });

  it('Action creator for authorization with NO_AUTH retursn correct action', () => {
    const expectedAction = {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload:  {
        authStatus: AuthorizationStatus.NO_AUTH,
        authInfo: {},
      },
    };

    expect(requireAuthorization(AuthorizationStatus.NO_AUTH, {})).toEqual(expectedAction);
  });

  it('Action creator for logout returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(logout()).toEqual(expectedAction);
  });

  it('Action creator for redirecting route return correct action', () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
    };

    expect(redirectToRoute()).toEqual(expectedAction);
  });

  it('action creator for reseting genre to initial values returns correct action', () => {
    const expectedAction = {
      type: ActionType.RESET_GENRE,
    };

    expect(resetGenreToInitial()).toEqual(expectedAction);
  });
});
