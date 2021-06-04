import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Movie = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  releaseDate: 2014,
};

ReactDOM.render(
  <App
    title={Movie.title}
    genre={Movie.genre}
    releaseDate={Movie.releaseDate}
  />,
  document.getElementById('root'));
