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

export const MAX_SIMILIAR_MOVIES_SHOWN = 4;

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
