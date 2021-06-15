import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import movies from './mocks/movies.js';
import reviews from './mocks/reviews.js';

ReactDOM.render(
  <App
    movies={movies}
    reviews={reviews}
  />,
  document.getElementById('root'));
