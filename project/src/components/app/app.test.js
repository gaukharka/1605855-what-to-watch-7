import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { AuthorizationStatus, AppRoutes} from '../../consts';
import { createAPI } from '../../services/api';
import App from './app';

let history = null;
let store = null;
let fakeApp = null;
const api = createAPI(() => {});

describe('Application Routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore([thunk.withExtraArgument(api)]);
    store = {
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        authInfo: {
          'id': 14,
          'name': 'Corey',
          'avatar_url': 'img/avatar.jpg',
          'token': 'YXNkYUBnbWFpbC5jb20=',
        },
      },
      MOVIE: {
        movies: [
          {
            id: 2,
            name: 'Seven Years in Tibet',
            posterImage: 'https://7.react.pages.academy/static/film/poster/Seven_Years_in_Tibet.jpg',
            previewImage: 'https://7.react.pages.academy/static/film/preview/seven-years-in-tibet.jpg',
            backgroundImage: 'https://7.react.pages.academy/static/film/background/Seven_Years_in_Tibet.jpg',
            backgroundColor: '#C6CADF',
            videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
            previewVideo: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
            description: 'True story of Heinrich Harrer, an Austrian mountain climber who became friends with the Dalai Lama at the time of Chinas takeover of Tibet.',
            rating:  3.6,
            scoresCount: 112612,
            director: 'Jean-Jacques Annaud',
            starring: ['Brad Pitt', 'David Thewlis', 'BD Wong'],
            runTime: 136,
            genre: 'Adventure',
            released: 1997,
            isFavorite: false,
          },
          {
            id: 3,
            name: 'Bronson',
            posterImage: 'https://7.react.pages.academy/static/film/poster/bronson.jpg',
            previewImage: 'https://7.react.pages.academy/static/film/preview/bronson.jpg',
            backgroundImage: 'https://7.react.pages.academy/static/film/background/bronson.jpg',
            backgroundColor: '#73B39A',
            videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
            previewVideo: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
            description: 'A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.',
            rating:  3.6,
            scoresCount: 109661,
            director: 'Nicolas Winding Refn',
            starring: ['Tom Hardy', 'Kelly Adams', 'Luing Andrews'],
            runTime: 92,
            genre: 'Action',
            released: 2008,
            isFavorite: false,
          },
        ],
        promoMovie: {
          id: 1,
          name: 'Orlando',
          posterImage: 'https://7.react.pages.academy/static/film/poster/Orlando.jpg',
          previewImage: 'https://7.react.pages.academy/static/film/preview/orlando.jpg',
          backgroundImage: 'https://7.react.pages.academy/static/film/background/Orlando.jpg',
          backgroundColor: '#D8D3BD',
          videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
          previewVideo: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
          description: 'Young nobleman Orlando is commanded by Queen Elizabeth I to stay forever young. Miraculously, he does just that. The film follows him as he moves through several centuries of British history, experiencing a variety of lives and relationships along the way, and even changing sex.',
          rating: 2.6,
          scoresCount: 12292,
          director: 'Sally Potter',
          starring: ['Tilda Swinton', 'Billy Zane', 'Quentin Crisp'],
          runTime: 94,
          genre: 'Action',
          released: 1992,
          isFavorite: true,
        },
        movie: {
          id: 3,
          name: 'Bronson',
          posterImage: 'https://7.react.pages.academy/static/film/poster/bronson.jpg',
          previewImage: 'https://7.react.pages.academy/static/film/preview/bronson.jpg',
          backgroundImage: 'https://7.react.pages.academy/static/film/background/bronson.jpg',
          backgroundColor: '#73B39A',
          videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
          previewVideo: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
          description: 'A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.',
          rating:  3.6,
          scoresCount: 109661,
          director: 'Nicolas Winding Refn',
          starring: ['Tom Hardy', 'Kelly Adams', 'Luing Andrews'],
          runTime: 92,
          genre: 'Action',
          released: 2008,
          isFavorite: false,
        },
        favoriteMovies: [
          {
            id: 2,
            name: 'Seven Years in Tibet',
            posterImage: 'https://7.react.pages.academy/static/film/poster/Seven_Years_in_Tibet.jpg',
            previewImage: 'https://7.react.pages.academy/static/film/preview/seven-years-in-tibet.jpg',
            backgroundImage: 'https://7.react.pages.academy/static/film/background/Seven_Years_in_Tibet.jpg',
            backgroundColor: '#C6CADF',
            videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
            previewVideo: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
            description: 'True story of Heinrich Harrer, an Austrian mountain climber who became friends with the Dalai Lama at the time of Chinas takeover of Tibet.',
            rating:  3.6,
            scoresCount: 112612,
            director: 'Jean-Jacques Annaud',
            starring: ['Brad Pitt', 'David Thewlis', 'BD Wong'],
            runTime: 136,
            genre: 'Adventure',
            released: 1997,
            isFavorite: false,
          },
          {
            id: 3,
            name: 'Bronson',
            posterImage: 'https://7.react.pages.academy/static/film/poster/bronson.jpg',
            previewImage: 'https://7.react.pages.academy/static/film/preview/bronson.jpg',
            backgroundImage: 'https://7.react.pages.academy/static/film/background/bronson.jpg',
            backgroundColor: '#73B39A',
            videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
            previewVideo: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
            description: 'A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.',
            rating:  3.6,
            scoresCount: 109661,
            director: 'Nicolas Winding Refn',
            starring: ['Tom Hardy', 'Kelly Adams', 'Luing Andrews'],
            runTime: 92,
            genre: 'Action',
            released: 2008,
            isFavorite: false,
          },
        ],
        isFetching: false,
        error: '',
      },
      REVIEW: [
        {
          id: 1,
          user: {
            id: 15,
            name: 'Kendall',
          },
          rating: 9.2,
          comment: 'I personally found this movie to be boring. Definitely one of the most boring movies I&#39ve ever seen.',
          date: '2021-07-01T16:51:35.253Z',
        },
        {
          id:2,
          user:{
            id:17,
            name: 'Emely',
          },
          rating:5.1,
          comment: 'I love this movie. This film is a milestone in cinematography. Great Immersive camera-work. This film is an experience and i has already seen it 4 times and I only see more quality of the film.',
          date: '2021-07-08T16:51:35.253Z',
        },
        {
          id:3,
          user: {
            id: 14,
            name: 'Corey',
          },
          rating:1.2,
          comment: 'Unfortunately we don&#39t have a reliable way to tell the true ratings of a movie.',
          date: '2021-06-22T16:51:35.253Z',
        },
      ],
    };

    fakeApp = (
      <Provider store={createFakeStore(store)}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });

  it('should render "MainPage" when user navigate to "/"', () => {
    history.push(AppRoutes.ROOT);
    render(fakeApp);

    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(/My list/i)).toBeInTheDocument();
  });

  it('should render "MoviePage" when user navigate to "/films/:id/"', () => {
    history.push(`${AppRoutes.FILM}`);
    render(fakeApp);

    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.getByText(/More like this/i)).toBeInTheDocument();
  });

  it('should render "MyList" when user navigate to "/mylist"', () => {
    history.push(AppRoutes.MYLIST);
    render(fakeApp);

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });

  it('should render "Review" when user navigate to "/films/:id/review"', () => {
    history.push(AppRoutes.REVIEW);
    render(fakeApp);

    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
    expect(screen.getByTestId('app-user-block')).toBeInTheDocument();
    expect(screen.getByTestId('add-review-form-id')).toBeInTheDocument();
  });

  it('should render "PlayerScreen" when user navigate to "/player/:id"', () => {
    history.push(AppRoutes.PLAYER);
    render(fakeApp);

    expect(screen.getByText(/Exit/i)).toBeInTheDocument();
    expect(screen.getByText(/Toggler/i)).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');
    render(fakeApp);

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
    expect(screen.getByText('Вернуться на главную')).toBeInTheDocument();
  });

  it('should render "Login" when user navigate to "/login"', () => {
    const createFakeStore = configureStore([thunk.withExtraArgument(api)]);

    store = createFakeStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authInfo: {},
      },
      MOVIE: {
        isFetching: false,
      },
    });

    history.push(AppRoutes.LOGIN);

    render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });
});
