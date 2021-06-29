import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {moviePropTypes} from '../../prop-types/movie-prop-types';
import MovieList from '../movie-list/movie-list.jsx';

function SimiliarMovies(props) {
  const {currentMovie, movies} = props;
  const filteredMovies = movies.filter((item) => item.id !== currentMovie.id);
  const filteredByGenre = filteredMovies.filter((item) => item.genre === currentMovie.genre);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <MovieList movies={filteredByGenre}/>
    </section>
  );
}

SimiliarMovies.propTypes = {
  movies: PropTypes.arrayOf(moviePropTypes).isRequired,
  currentMovie: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.filteredMovies,
});

export {SimiliarMovies};
export default connect(mapStateToProps, null)(SimiliarMovies);
