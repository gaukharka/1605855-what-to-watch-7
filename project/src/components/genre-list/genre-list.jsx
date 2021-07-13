import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {INITIAL_GENRE} from '../../consts';
import {moviePropTypes} from '../../prop-types/movie-prop-types';
import { changeGenre } from '../../store/action';
import { getMovies, getGenres } from '../../store/movie-data/selectors';

function GenreList(props) {
  const {movies, genre, onGenreChange} = props;
  const genres = [...new Set([INITIAL_GENRE, ...movies.map((movie) => movie.genre)])];

  return (
    <ul className="catalog__genres-list">
      {genres.map((item, idx) => {
        const keyValue = idx +1;

        return (
          <li
            key={keyValue}
            className={`catalog__genres-item ${item === genre ? 'catalog__genres-item--active' : ''}`}
            onClick={() => onGenreChange(item)}
          >
            <Link
              to="/#"
              className="catalog__genres-link"
            >{item}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

GenreList.propTypes = {
  movies: PropTypes.arrayOf(moviePropTypes).isRequired,
  genre: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  genre: getGenres(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange(genre) {
    dispatch(changeGenre(genre));
  },
});

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
