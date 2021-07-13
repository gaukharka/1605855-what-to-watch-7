import { createReducer } from '@reduxjs/toolkit';
import { INITIAL_GENRE } from '../../consts';
import { changeGenre, reset, loadMovies, loadPromoMovie, loadFavoriteMovies} from '../action';

const initialState = {
  genre: INITIAL_GENRE,
  movies: [],
  promoMovie: {},
  favoriteMovies: [],
  isFetching: false,
  error: '',
};

export const movieData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadMovies, (state, action) => {
      state.movies = action.payload;
      state.isFetching = true;
    })
    .addCase(loadPromoMovie, (state, action) => {
      state.promoMovie = action.payload;
      state.isFetching = true;
    })
    .addCase(loadFavoriteMovies, (state, action) => {
      state.favoriteMovies = action.payload;
      state.isFetching = true;
    })
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(reset);
});
