import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {reducer} from './store/reducer';
import {createAPI} from './services/api';
import {ActionCreator} from './store/action';
import {fetchMovieList, fetchPromoMovie, fetchFavoriteMovieList, fetchReviewList} from './store/api-actions';
import {AuthorizationStatus} from './consts';
import App from './components/app/app';

const api = createAPI(
  () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

store.dispatch(fetchMovieList());
store.dispatch(fetchPromoMovie());
store.dispatch(fetchFavoriteMovieList());
store.dispatch(fetchReviewList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
