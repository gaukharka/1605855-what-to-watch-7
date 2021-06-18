import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/logo.jsx';
import Footer from '../footer/footer.jsx';
import MovieCard from '../movie-card/movie-card.jsx';
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
        {filteredMovies.map((item) => (
          <MovieCard
            key={item.id}
            id={item.id}
            name={item.name}
            previewImage={item.previewImage}
            videoLink={item.videoLink}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
}

MyList.propTypes = {
  movies: PropTypes.array.isRequired,
  // movies: PropTypes.arrayOf(PropTypes.shape({
  // id: PropTypes.number.isRequired,
  // previewImage: PropTypes.node.isRequired,
  // name: PropTypes.string.isRequired,
  // })).isRequired,
};

export default MyList;
