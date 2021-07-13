import {NameSpace} from '../root-reducer';

export const getFetchedMovieStatus = (state) => state[NameSpace.MOVIE].isFetching;

export const getMovies = (state) => state[NameSpace.MOVIE].movies;

export const getGenres = (state) => state[NameSpace.MOVIE].genre;

export const getPromoMovie = (state) => state[NameSpace.MOVIE].promoMovie;
