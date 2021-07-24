import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../consts';
import MyListButton from './my-list-button';

const initialState = {
  MOVIES: {
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
    currentFilm: {
      backgroundColor: '#C6CADF',
      backgroundImage: 'https://7.react.pages.academy/static/film/background/Seven_Years_in_Tibet.jpg',
      description: 'True story of Heinrich Harrer, an Austrian mountain climber who became friends with the Dalai Lama at the time of Chinas takeover of Tibet.',
      director: 'Jean-Jacques Annaud',
      genre: 'Adventure',
      id: 2,
      isFavorite: false,
      name: 'Seven Years in Tibet',
      posterImage: 'https://7.react.pages.academy/static/film/poster/Seven_Years_in_Tibet.jpg',
      previewImage: 'https://7.react.pages.academy/static/film/preview/seven-years-in-tibet.jpg',
      previewVideo: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
      rating: 3.6,
      released: 1997,
      runTime: 136,
      scoresCount: 112612,
      starring: ['Brad Pitt', 'David Thewlis', 'BD Wong'],
      videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
    },
  },
  USER: {
    authorizationStatus: AuthorizationStatus.AUTH,
    authInfo: {
      'id': 14,
      'name': 'Corey',
      'avatar_url': 'img/avatar.jpg',
      'token': 'YXNkYUBnbWFpbC5jb20=',
    },
  },
};

const movie = initialState.MOVIES.currentFilm;

const mockStore = configureStore({});

describe('Component: MyListButton', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    history.push('/login');

    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <MyListButton
            movie={movie}
          />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
  });
});
