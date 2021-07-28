import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { AppRoutes } from '../../consts';
import { isCheckedAuth } from '../../utils/utils';
import MainPage from '../main-page/main-page';
import Login from '../user-block/login.jsx';
import MoviePage from '../movie-page/movie-page';
import MyList from '../my-list/my-list';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Review from '../review/review';
import PlayerScreen from '../player/player-screen';
import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';
import { init as initApp } from './action/init';
import { getAuthorizationStatus } from '../../store/user/selectors';
import { getFetchedMovieStatus } from '../../store/movie-data/selectors';

function App(props) {
  const {authorizationStatus, isFetching, init} = props;

  useEffect(() => {
    init();
  }, []);

  if(isCheckedAuth(authorizationStatus) || isFetching) {
    return <LoadingScreen />;
  }

  return (
    <Switch>
      <Route exact path={AppRoutes.ROOT} render={() => <MainPage />} />
      <Route exact path={AppRoutes.FILM} render={(data) => <MoviePage id={Number(data.match.params.id)} />} />
      <PrivateRoute exact path={AppRoutes.MYLIST} render={() => <MyList />}/>
      <PrivateRoute exact path={AppRoutes.REVIEW} render={(data) => <Review id={Number(data.match.params.id)} />}/>
      <Route exact path={AppRoutes.PLAYER} render={(data) => <PlayerScreen id={Number(data.match.params.id)} />} />
      <Route exact path={AppRoutes.LOGIN} render={() => <Login />} />
      <Route>
        <NotFoundScreen />
      </Route>
    </Switch>
  );
}

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  init: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  isFetching: getFetchedMovieStatus(state),
});

const mapDispatchToProps = (dispatch) =>({
  init(){
    dispatch(initApp());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
