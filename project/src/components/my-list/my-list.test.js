import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../consts';
import MyList from './my-list';

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
        isFavorite: true,
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
        isFavorite: true,
      },
    ],
  },
};

const mockStore = configureStore([thunk]);

describe('Component: MyList', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    history.push('/mylist');

    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <MyList />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.getByTestId('app-user-block')).toBeInTheDocument();
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
    expect(screen.getByTestId('catalog-films-list')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
