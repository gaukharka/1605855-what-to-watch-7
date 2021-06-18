import React from 'react';
import PropTypes from 'prop-types';
import MovieList from '../movie-list/movie-list.jsx';

function SimiliarMovie(props) {
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

SimiliarMovie.propTypes = {
  movies: PropTypes.array.isRequired,
  currentMovie: PropTypes.object.isRequired,
};

export default SimiliarMovie;
