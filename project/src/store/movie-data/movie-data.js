import { createReducer } from '@reduxjs/toolkit';
import { INITIAL_GENRE } from '../../consts';
import { changeGenre, reset, loadMovies, loadPromoMovie, loadFavoriteMovies, setStatus, updateFilm, resetGenreToInitial } from '../action';

const initialState = {
  genre: INITIAL_GENRE,
  movies: [],
  promoMovie: {},
  movie: {},
  favoriteMovies: [],
  isFetching: false,
  error: '',
};

export const movieData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadMovies, (state, action) => {
      state.movies = action.payload;
    })
    .addCase(loadPromoMovie, (state, action) => {
      state.promoMovie = action.payload;
    })
    .addCase(loadFavoriteMovies, (state, action) => {
      state.favoriteMovies = action.payload;
    })
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(reset)
    .addCase(setStatus, (state, action) => {
      state.isFetching = action.payload;
    })
    .addCase(updateFilm, (state, action) => {
      state.movie = action.payload;
      state.promoMovie = action.payload;
    })
    .addCase(resetGenreToInitial, (state) => {
      state.genre = INITIAL_GENRE;
    });
});
