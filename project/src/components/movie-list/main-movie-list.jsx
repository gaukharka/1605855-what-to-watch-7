import React from 'react';
import PropTypes from 'prop-types';
import {moviePropTypes} from '../../prop-types/movie-prop-types';
import {connect} from 'react-redux';
import MovieList from './movie-list';
import LoadMoreButton from '../buttons/button-load-more';
import { ActionCreator } from '../../store/action';

function MainMovieList(props) {
  const {filteredMovies, maxCountOfMoviesShown, onClickShowMoreMovies} = props;
  const moviesToBeShown = filteredMovies.slice(0, Math.min(filteredMovies.length, maxCountOfMoviesShown));

  return (
    <>
      <MovieList movies={moviesToBeShown}/>
      {filteredMovies.length > maxCountOfMoviesShown && <LoadMoreButton onClickShowMoreMovies={onClickShowMoreMovies}/>}
    </>
  );
}

MainMovieList.propTypes = {
  filteredMovies: PropTypes.arrayOf(moviePropTypes).isRequired,
  maxCountOfMoviesShown: PropTypes.number.isRequired,
  onClickShowMoreMovies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filteredMovies: state.filteredMovies,
  maxCountOfMoviesShown: state.maxCountOfMoviesShown,
});

const mapDispatchToProps = (dispatch) => ({
  onClickShowMoreMovies() {
    dispatch(ActionCreator.getMaxCountOfMovies());
  },
});

export {MainMovieList};
export default connect(mapStateToProps, mapDispatchToProps)(MainMovieList);
