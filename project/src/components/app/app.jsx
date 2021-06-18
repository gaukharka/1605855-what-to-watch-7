import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute} from '../../consts.js';
import MainPage from '../main-page/main-page.jsx';
import Login from '../user-block/login.jsx';
import Movie from '../movie/movie-page.jsx';
import MyList from '../my-list/my-list.jsx';
import NotFoundScreen from '../not-found-screen/not-found-screen.jsx';
import Review from '../review/review.jsx';
import Player from '../player/player.jsx';

function App(props) {
  const {movies, reviews}=props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage
            movies={movies}
          />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login />
        </Route>
        <Route exact path={AppRoute.FILM}>
          <Movie
            movies={movies}
            reviews={reviews}
          />
        </Route>
        <Route exact path={AppRoute.MYLIST}>
          <MyList
            movies={movies}
          />
        </Route>
        <Route exact path={AppRoute.REVIEW}>
          <Review
            movies={movies}
          />
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <Player
            movies={movies}
          />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    videoLink: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
    runTime: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  })).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,
};

export default App;
