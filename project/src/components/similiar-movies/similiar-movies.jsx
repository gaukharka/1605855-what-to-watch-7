import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {moviePropTypes} from '../../prop-types/movie-prop-types';
import {MAX_SIMILIAR_MOVIES_SHOWN} from '../../consts';
import {getFilteredMovies} from '../../selectors/get-filtered-movies';
import MovieCard from '../movie-card/movie-card';
import { getMovies, getGenres } from '../../store/movie-data/selectors';

function SimiliarMovies(props) {
  const {currentMovie, movies} = props;
  const moviesFiltered = movies.filter((movie) => movie.id !== currentMovie.id);
  const filteredByGenre = moviesFiltered.filter((movie) => movie.genre === currentMovie.genre );

  const [activeMovie, setActiveMovie] = useState();

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <div className="catalog__films-list">
        {filteredByGenre.slice(0, MAX_SIMILIAR_MOVIES_SHOWN).map((item) => (
          <MovieCard
            key={item.id+1}
            movie={item}
            isActive={item === activeMovie}
            onMouseOver={() => setActiveMovie(item)}
            onMouseOut={() => setActiveMovie(null)}
          />
        ))}
      </div>
    </section>
  );
}

SimiliarMovies.propTypes = {
  movies: PropTypes.arrayOf(moviePropTypes).isRequired,
  currentMovie: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  movies: getFilteredMovies(getMovies(state), getGenres(state)),
});

export {SimiliarMovies};
export default connect(mapStateToProps, null)(SimiliarMovies);
