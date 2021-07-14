import React from 'react';
import { useSelector } from 'react-redux';
import Logo from '../logo/logo';
import Footer from '../footer/footer';
import MovieList from '../movie-list/movie-list';
import UserBlock from '../user-block/user-block';
import { getMovies } from '../../store/movie-data/selectors';

function MyList() {
  const movies = useSelector(getMovies);
  const filteredMovies = movies.filter((item) => item.isFavorite);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MovieList movies={filteredMovies}/>
      </section>
      <Footer />
    </div>
  );
}

export default MyList;
