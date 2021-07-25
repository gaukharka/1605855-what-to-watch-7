export const AppRoutes = {
  ROOT: '/',
  LOGIN: '/login',
  MYLIST: '/mylist',
  FILM: '/films/:id',
  REVIEW: '/films/:id/review',
  PLAYER: '/player/:id',
};

export const INITIAL_GENRE = 'All genres';

export const MAX_MOVIES_SHOWN = 8;

export const MAX_SIMILAR_MOVIES_SHOWN = 4;

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoutes = {
  MOVIES: '/films',
  PROMO_MOVIE: '/promo',
  FAVORITE_MOVIE: '/favorite',
  GET_COMMENTS: '/comments',
  LOGIN: '/login',
  LOGOUT: '/logout',
};

export const ReviewLength = {
  MIN: 50,
  MAX: 401,
};

const Rating = {
  BAD: 'Bad',
  NORMAL: 'Normal',
  GOOD: 'Good',
  VERY_GOOD: 'Very good',
  AWESOME: 'Awesome',
};

export const getRating = (score) => {
  if(score >= 0 & score < 3){
    return Rating.BAD;
  } else if(score >= 3 && score < 5){
    return Rating.NORMAL;
  } else if(score >= 5 && score < 8){
    return Rating.GOOD;
  } else if(score >= 8 && score < 10){
    return Rating.VERY_GOOD;
  }
  return Rating.AWESOME;
};

export const seconds = 60;
