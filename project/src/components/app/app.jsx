import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {AppRoutes} from '../../consts';
import {isCheckedAuth} from '../../utils/utils';
import MainPage from '../main-page/main-page';
import Login from '../user-block/login.jsx';
import MoviePage from '../movie-page/movie-page';
import MyList from '../my-list/my-list';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Review from '../review/review';
import Player from '../player/player';
import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';
import {browserHistory} from '../../browser-history';

function App(props) {
  const {authorizationStatus, isMovieListLoaded, isPromoMovieLoaded} = props;

  if(isCheckedAuth(authorizationStatus) || !isMovieListLoaded || !isPromoMovieLoaded ) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoutes.ROOT}>
          <MainPage />
        </Route>
        <Route exact path={AppRoutes.FILM}>
          <MoviePage />
        </Route>
        <PrivateRoute
          exact
          path={AppRoutes.MYLIST}
          render={() => <MyList />}
        />
        <PrivateRoute
          exact
          path={AppRoutes.REVIEW}
          render={() => <Review />}
        />
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
  authorizationStatus: PropTypes.string.isRequired,
  isMovieListLoaded: PropTypes.bool.isRequired,
  isPromoMovieLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  isMovieListLoaded: state.isMovieListLoaded,
  isPromoMovieLoaded: state.isPromoMovieLoaded,
});

export {App};
export default connect(mapStateToProps, null)(App);
