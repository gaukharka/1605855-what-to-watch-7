import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { MAX_MOVIES_SHOWN } from '../../consts.js';
import { moviePropTypes } from '../../prop-types/movie-prop-types';
import MovieCard from '../movie-card/movie-card.jsx';
import LoadMoreButton from '../buttons/load-more-button';
import { getGenres } from '../../store/movie-data/selectors';
import { getFilteredMovies } from '../../selectors/get-filtered-movies';

function MovieList(props) {
  const {movies} = props;
  const genre = useSelector(getGenres);
  const [activeMovie, setActiveMovie] = useState();
  const [visibleMovies, setVisibleMovies] = useState(MAX_MOVIES_SHOWN);
  const filteredMovies = getFilteredMovies(movies, genre);

  const loadMore = () => {
    setVisibleMovies(visibleMovies + MAX_MOVIES_SHOWN);
  };

  return (
    <>
      <div className="catalog__films-list" data-testid="catalog-films-list">
        {filteredMovies.slice(0, visibleMovies).map((item) => (
          <MovieCard
            key={item.id+1}
            movie={item}
            isActive={item === activeMovie}
            onMouseOver={() => setActiveMovie(item)}
            onMouseOut={() => setActiveMovie(null)}
          />
        ))}
      </div>
      { visibleMovies < filteredMovies.length &&
        <LoadMoreButton
          onClickShowMoreMovies={loadMore}
        />}
    </>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(moviePropTypes).isRequired,
};

export default MovieList;
