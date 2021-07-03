import {INITIAL_GENRE, AuthorizationStatus} from '../consts';

export const getFilteredMovies = (movies, genre) => (
  genre === INITIAL_GENRE ? movies : movies.filter((movie) => movie.genre === genre)
);

export const isCheckedAuth = (authorizationStatus) => authorizationStatus === AuthorizationStatus.UNKNOWN;
