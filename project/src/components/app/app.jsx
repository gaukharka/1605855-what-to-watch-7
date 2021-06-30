import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../consts';
import MainPage from '../main-page/main-page.jsx';
import Login from '../user-block/login.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import MyList from '../my-list/my-list.jsx';
import NotFoundScreen from '../not-found-screen/not-found-screen.jsx';
import Review from '../review/review.jsx';
import Player from '../player/player.jsx';

function App(props) {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login />
        </Route>
        <Route exact path={AppRoute.FILM}>
          <MoviePage />
        </Route>
        <Route exact path={AppRoute.MYLIST}>
          <MyList />
        </Route>
        <Route exact path={AppRoute.REVIEW}>
          <Review />
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <Player />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {};

export default App;
