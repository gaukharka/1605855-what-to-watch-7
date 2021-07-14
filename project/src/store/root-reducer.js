import { combineReducers } from 'redux';
import { user } from './user/user';
import { movieData } from './movie-data/movie-data';
import { reviewData } from './review/review';

export const NameSpace = {
  USER: 'USER',
  MOVIE: 'MOVIE',
  REVIEW: 'REVIEW',
};

export default combineReducers({
  [NameSpace.MOVIE]: movieData,
  [NameSpace.USER]: user,
  [NameSpace.REVIEW]: reviewData,
});
