import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {moviePropTypes} from '../../prop-types/movie-prop-types';
import {MAX_MOVIES_SHOWN} from '../../consts.js';
import {getFilteredMovies} from '../../selectors/selectors';
import MovieCard from '../movie-card/movie-card.jsx';
import LoadMoreButton from '../buttons/button-load-more';

function MovieList(props) {
  const {movies} = props;
  const [activeMovie, setActiveMovie] = useState();
  const [visibleMovies, setVisibleMovies] = useState(MAX_MOVIES_SHOWN);

  const loadMore = () => {
    setVisibleMovies(visibleMovies + MAX_MOVIES_SHOWN);
  };

  return (
    <>
      <div className="catalog__films-list">
        {movies.slice(0, visibleMovies).map((item) => (
          <MovieCard
            key={item.id}
            id={item.id}
            name={item.name}
            previewImage={item.previewImage}
            previewVideo={item.previewVideo}
            isActive={item === activeMovie}
            onMouseOver={() => setActiveMovie(item)}
            onMouseOut={() => setActiveMovie(null)}
          />
        ))}
      </div>
      { visibleMovies < movies.length &&
        <LoadMoreButton
          onClickShowMoreMovies={loadMore}
        />}
    </>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(moviePropTypes).isRequired,
};

const mapStateToProps = (state) => ({
  movies: getFilteredMovies(state.movies, state.genre),
});

export {MovieList};
export default connect(mapStateToProps, null)(MovieList);
