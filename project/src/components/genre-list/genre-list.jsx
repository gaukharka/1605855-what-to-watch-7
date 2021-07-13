import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { INITIAL_GENRE } from '../../consts';
import { changeGenre } from '../../store/action';
import { getMovies, getGenres } from '../../store/movie-data/selectors';

function GenreList() {
  const movies = useSelector(getMovies);
  const genre = useSelector(getGenres);

  const genres = [...new Set([INITIAL_GENRE, ...movies.map((movie) => movie.genre)])];

  const dispatch = useDispatch();

  return (
    <ul className="catalog__genres-list">
      {genres.map((item, idx) => {
        const keyValue = idx +1;

        return (
          <li
            key={keyValue}
            className={`catalog__genres-item ${item === genre ? 'catalog__genres-item--active' : ''}`}
            onClick={() => dispatch(changeGenre(item))}
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

export default GenreList;
