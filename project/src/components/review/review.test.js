import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../consts';
import Review from './review';

const initialState = {
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
    movie:
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
        isFavorite: true,
      },
  },
};

const movie = initialState.MOVIE.movie;
const id = 2;

const mockStore = configureStore([thunk]);

describe('Component: Review', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <Review id={id}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(`${movie.name}`)).toBeInTheDocument();
    expect(screen.getByText('Add review')).toBeInTheDocument();
  });
});
