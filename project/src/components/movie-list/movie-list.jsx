import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {moviePropTypes} from '../../prop-types/movie-prop-types';
import {connect} from 'react-redux';
import MovieCard from '../movie-card/movie-card.jsx';
import LoadMoreButton from '../buttons/button-load-more';
import { ActionCreator } from '../../store/action';

function MovieList(props) {
  const {movies, maxCountOfMoviesShown, onClickShowMoreMovies} = props;
  const [activeMovie, setActiveMovie] = useState();
  const moviesToBeShown = movies.slice(0, Math.min(movies.length, maxCountOfMoviesShown));

  return (
    <>
      <div className="catalog__films-list">
        {moviesToBeShown.map((item) => (
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
      {movies.length > maxCountOfMoviesShown && <LoadMoreButton onClickShowMoreMovies={onClickShowMoreMovies}/>}
    </>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(moviePropTypes).isRequired,
  maxCountOfMoviesShown: PropTypes.number.isRequired,
  onClickShowMoreMovies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.filteredMovies,
  maxCountOfMoviesShown: state.maxCountOfMoviesShown,
});

const mapDispatchToProps = (dispatch) => ({
  onClickShowMoreMovies() {
    dispatch(ActionCreator.getMaxCountOfMovies());
  },
});

export {MovieList};
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
