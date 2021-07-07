
import {INITIAL_GENRE} from '../consts';

export const getFilteredMovies = (movies, genre) => (
  genre === INITIAL_GENRE ? movies : movies.filter((movie) => movie.genre === genre)
);
