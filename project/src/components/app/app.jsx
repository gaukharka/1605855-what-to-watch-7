import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute} from '../../consts';
import {moviePropTypes} from '../../prop-types/movie-prop-types';
import {reviewPropTypes} from '../../prop-types/review-prop-types';
import MainPage from '../main-page/main-page.jsx';
import Login from '../user-block/login.jsx';
import Movie from '../movie-page/movie-page.jsx';
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
  movies: PropTypes.arrayOf(moviePropTypes).isRequired,
  reviews: PropTypes.arrayOf(reviewPropTypes).isRequired,
};

export default App;
