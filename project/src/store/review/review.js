import { createReducer } from '@reduxjs/toolkit';
import { loadReviews } from '../action';

const initialState = {
  reviews: [],
};

export const reviewData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    });
});
