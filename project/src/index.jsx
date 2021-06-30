import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import movies from './mocks/movies.js';
import reviews from './mocks/reviews.js';
import {reducer} from './store/reducer';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        movies={movies}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));