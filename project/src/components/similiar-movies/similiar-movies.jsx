import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {moviePropTypes} from '../../prop-types/movie-prop-types';
import {MAX_SIMILIAR_MOVIES_SHOWN} from '../../consts';
import {getFilteredMovies} from '../../utils/utils';
import MovieList from '../movie-list/movie-list.jsx';

function SimiliarMovies(props) {
  const {currentMovie, movies} = props;
  const moviesFiltered = movies.filter((movie) => movie.id !== currentMovie.id);
  const filteredByGenre = moviesFiltered.filter((movie) => movie.genre === currentMovie.genre);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <MovieList movies={filteredByGenre.slice(0, MAX_SIMILIAR_MOVIES_SHOWN)}/>
    </section>
  );
}

SimiliarMovies.propTypes = {
  // filteredMovies: PropTypes.arrayOf(moviePropTypes).isRequired,
  movies: PropTypes.arrayOf(moviePropTypes).isRequired,
  currentMovie: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  // filteredMovies: state.filteredMovies,
  movies: getFilteredMovies(state.movies, state.genre),
});

export {SimiliarMovies};
export default connect(mapStateToProps, null)(SimiliarMovies);
