import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Movie = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  releaseDate: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      title={Movie.title}
      genre={Movie.genre}
      releaseDate={Movie.releaseDate}
    />
  </React.StrictMode>,
  document.getElementById('root'));
