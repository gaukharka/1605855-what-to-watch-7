import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { getRating } from '../../consts';
import List from './list';

const movie = {
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
};


describe('Component: List', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const {getByText} = render(
      <Router history={history}>
        <List
          movie={movie}
        />
      </Router>,
    );

    expect(getByText(`${movie.rating}`)).toBeInTheDocument();
    expect(getByText(`${getRating(movie.rating)}`)).toBeInTheDocument();
    expect(getByText(`${movie.scoresCount} ratings`)).toBeInTheDocument();
    expect(getByText('Description')).toBeInTheDocument();
    expect(getByText(`${movie.description}`)).toBeInTheDocument();
    expect(getByText(`Director: ${movie.director}`)).toBeInTheDocument();
  });
});


