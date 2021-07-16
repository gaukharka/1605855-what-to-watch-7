import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../logo/logo';
import Footer from '../footer/footer';
import MovieList from '../movie-list/movie-list';
import UserBlock from '../user-block/user-block';
import { getMovies } from '../../store/movie-data/selectors';
import { fetchFavoriteMovieList } from '../../store/api-actions';

function MyList() {
  const movies = useSelector(getMovies);
  const favoriteMovies = movies.filter((item) => item.isFavorite);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteMovieList);
  }, []);

  /* eslint-disable no-console */
  console.log(favoriteMovies);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MovieList movies={favoriteMovies}/>
      </section>
      <Footer />
    </div>
  );
}

export default MyList;
