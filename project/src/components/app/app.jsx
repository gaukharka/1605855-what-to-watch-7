import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoutes} from '../../consts';
import MainPage from '../main-page/main-page.jsx';
import Login from '../user-block/login.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import MyList from '../my-list/my-list.jsx';
import NotFoundScreen from '../not-found-screen/not-found-screen.jsx';
import Review from '../review/review.jsx';
import Player from '../player/player.jsx';
import LoadingScreen from '../loading-screen/loading-screen';

function App(props) {
  const {isMovieListLoaded, isPromoListLoaded} = props;

  if(!isMovieListLoaded || !isPromoListLoaded ) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoutes.ROOT}>
          <MainPage />
        </Route>
        <Route exact path={AppRoutes.FILM}>
          <MoviePage />
        </Route>
        <Route exact path={AppRoutes.MYLIST}>
          <MyList />
        </Route>
        <Route exact path={AppRoutes.REVIEW}>
          <Review />
        </Route>
        <Route exact path={AppRoutes.PLAYER}>
          <Player />
        </Route>
        <Route exact path={AppRoutes.LOGIN}>
          <Login />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  isMovieListLoaded: PropTypes.bool.isRequired,
  isPromoListLoaded: PropTypes.bool.isRequired,
  // isReviewListLoaded: PropTypes.bool.isRequired,
  // isFavoriteListLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isMovieListLoaded: state.isMovieListLoaded,
  isPromoListLoaded: state.isPromoListLoaded,
  isReviewListLoaded: state.isReviewListLoaded,
  isFavoriteListLoaded: state.isFavoriteListLoaded,
});

export {App};
export default connect(mapStateToProps, null)(App);
