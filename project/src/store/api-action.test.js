import MockAdapter from 'axios-mock-adapter';
import { APIRoutes, AppRoutes, AuthorizationStatus } from '../consts';
import { createAPI } from '../services/api';
import { ActionType } from './action';
import {checkAuth, login, logout, fetchMovieList, fetchPromoMovie, fetchFavoriteMovieList, fetchReviewList,  postReview, updateMovie } from './api-actions';
import { adaptDataToMovie, adaptDataToMovies } from '../services/adaptors';

let api = null;

const movieData = {
  'id': 1,
  'name': 'Orlando',
  'poster_image': 'https://7.react.pages.academy/static/film/poster/Orlando.jpg',
  'preview_image': 'https://7.react.pages.academy/static/film/preview/orlando.jpg',
  'background_image': 'https://7.react.pages.academy/static/film/background/Orlando.jpg',
  'background_color': '#D8D3BD',
  'video_link': 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
  'preview_video_link': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  'description': 'Young nobleman Orlando is commanded by Queen Elizabeth I to stay forever young. Miraculously, he does just that. The film follows him as he moves through several centuries of British history, experiencing a variety of lives and relationships along the way, and even changing sex.',
  'rating': 2.6,
  'scores_count': 12292,
  'director': 'Sally Potter',
  'starring': ['Tilda Swinton', 'Billy Zane', 'Quentin Crisp'],
  'run_time': 94,
  'genre': 'Action',
  'released': 1992,
  'is_favorite': true,
};

const reviewData = {
  'id': 1,
  'user': {
    'id': 4,
    'name': 'Kate Muir',
  },
  'rating': 8.9,
  'comment': 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
  'date': '2019-05-08T14:13:56.569Z',
};

const reviewPostData = {
  'rating': 8,
  'comment': 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
};

describe('Async operations', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoutes.LOGIN)
      .reply(200, [{ fake: true }]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: {
            authStatus: AuthorizationStatus.AUTH,
          },
        });
      });
  });

  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: 'test@gmail.com', password: 'asdfg'};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(APIRoutes.LOGIN)
      .reply(200, [{fake: true}]);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: {
            authStatus: AuthorizationStatus.AUTH,
          },
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoutes.ROOT,
        });
      });
  });

  it('should make a correct API call to DELETE /logout', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logout();

    apiMock
      .onDelete(APIRoutes.LOGOUT)
      .reply(204);

    return logoutLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOGOUT,
        });
      });
  });

  it('should make a correct API call to GET /films', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchMoviesLoader = fetchMovieList();

    apiMock
      .onGet(APIRoutes.MOVIES)
      .reply(200, [movieData, movieData, movieData]);

    return fetchMoviesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIES,
          payload: adaptDataToMovies([movieData, movieData, movieData]),
        });
      });
  });

  it('should make a correct API call to GET /promo', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchPromoMovieLoader = fetchPromoMovie();

    apiMock
      .onGet(APIRoutes.PROMO_MOVIE)
      .reply(200, movieData);

    return fetchPromoMovieLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO_MOVIE,
          payload: adaptDataToMovie(movieData),
        });
      });
  });

  it('should make a correct API call to GET /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchFavoriteMovieListLoader = fetchFavoriteMovieList();

    apiMock
      .onGet(APIRoutes.FAVORITE_MOVIE)
      .reply(200, [movieData, movieData]);

    return fetchFavoriteMovieListLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_MOVIES,
          payload: adaptDataToMovies([movieData, movieData]),
        });
      });
  });

  it('should make a correct API call to POST /favorite/: film_id/: status', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const status = 1;
    const updateMovieLoader = updateMovie(id, status);

    apiMock
      .onPost(`${APIRoutes.FAVORITE_MOVIE}/${id}/${status}`)
      .reply(200, movieData);

    return updateMovieLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_MOVIE,
          payload: adaptDataToMovie(movieData),
        });
      });
  });

  it('should make a correct API call to GET /comments/: film_id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const fetchReviewListLoader = fetchReviewList(id);

    apiMock
      .onGet(`${APIRoutes.GET_COMMENTS}/${id}`)
      .reply(200, [reviewData, reviewData]);

    return fetchReviewListLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [reviewData, reviewData],
        });
      });
  });

  it('should make a correct API call to POST /comments/: film_id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const history = () => {};
    const postReviewLoader = postReview(id, reviewPostData, history);

    apiMock
      .onPost(`${APIRoutes.GET_COMMENTS}/${id}`)
      .reply(200, [reviewPostData]);

    return postReviewLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.POST_REVIEWS,
          payload: false,
        });
      });
  });
});
