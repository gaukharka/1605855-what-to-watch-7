import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router, Switch, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import PlayerScreen from './player-screen';

const initialState = {
  id: 2,
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

let history;
const mockStore = configureStore([thunk]);
const id = 2;
const movie = initialState.MOVIE.movie;

describe('Component: PlayerScreen', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    history.push('/player/2');
  });

  it('should render correctly', () => {
    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <PlayerScreen id={id}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Exit/i)).toBeInTheDocument();
    expect(screen.getByText(/Toggler/i)).toBeInTheDocument();
    expect(screen.getByText(movie.name)).toBeInTheDocument();
    expect(document.querySelector('.player__play')).toBeInTheDocument();
    expect(document.querySelector('.player__exit')).toBeInTheDocument();
    expect(document.querySelector('.player__video')).toBeInTheDocument();
  });

  it('should redirect to root url when user clicked to link', () => {
    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <Switch>
            <Route path="/" exact>
              <h1>This is main page</h1>
            </Route>
            <Route>
              <PlayerScreen id={id}/>
            </Route>
          </Switch>
        </Router>
      </Provider>,
    );

    expect(screen.queryByText(/This is main page/i)).not.toBeInTheDocument();
    userEvent.click(document.querySelector('.player__exit'));
    expect(screen.queryByText(/This is main page/i)).toBeInTheDocument();
  });

  it('should switch player to full mode', () => {
    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <PlayerScreen id={id}/>
        </Router>
      </Provider>,
    );

    userEvent.click(document.querySelector('.player__full-screen'));
    expect(Document.fullscreenElement).not.toBe(null);
  });
});
