import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/logo.jsx';
import Footer from '../footer/footer.jsx';
import MovieList from '../movie-list/movie-list.jsx';
import SignOut from '../user-block/signout.jsx';

function MyList(props) {
  const {movies}=props;
  const filteredMovies = movies.filter((item) => item.isFavorite);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list</h1>
        <SignOut />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MovieList movies={filteredMovies}/>
      </section>
      <Footer />
    </div>
  );
}

MyList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MyList;
