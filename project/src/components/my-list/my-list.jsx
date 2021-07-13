import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {moviePropTypes} from '../../prop-types/movie-prop-types';
import Logo from '../logo/logo';
import Footer from '../footer/footer';
import MovieList from '../movie-list/movie-list';
import UserBlock from '../user-block/user-block';

function MyList(props) {
  const {movies}=props;
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

MyList.propTypes = {
  movies: PropTypes.arrayOf(moviePropTypes).isRequired,
};

const mapStateToProps = ({MOVIE}) => ({
  movies: MOVIE.movies,
});

export {MyList};
export default connect(mapStateToProps, null)(MyList);
