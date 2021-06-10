import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/logo.jsx';
import MoviePageInList from './movie-page-in-list.jsx';
// import MoviePageDetails from './movie-page-details.jsx';
// import MoviePageReviews from './movie-page-reviews.jsx';
import SignOut from '../user-block/signout.jsx';

function Movie(props) {
  const {movie}=props;
  const {name, genre, released}=movie;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />
          <SignOut />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__desc">
            <h2 className="film-card__title">{name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{released}</span>
            </p>

            <div className="film-card__buttons">
              <button className="btn btn--play film-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list film-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
              <a href="add-review.html" className="btn film-card__button">Add review</a>
            </div>
          </div>
        </div>
      </div>

      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <div className="film-card__poster film-card__poster--big">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <nav className="film-nav film-card__nav">
              <ul className="film-nav__list">
                <li className="film-nav__item film-nav__item--active">
                  <a href="/#" className="film-nav__link">Overview</a>
                </li>
                <li className="film-nav__item">
                  <a href="/#" className="film-nav__link">Details</a>
                </li>
                <li className="film-nav__item">
                  <a href="/#" className="film-nav__link">Reviews</a>
                </li>
              </ul>
            </nav>
            {/* <MoviePageReviews reviews={reviews}/> */}
            <MoviePageInList movie={movie}/>
            {/* <MoviePageDetails movie={movie}/> */}
          </div>
        </div>
      </div>
    </section>
  );
}

Movie.propTypes={
  movie: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.node.isRequired,
    previewImage: PropTypes.node.isRequired,
    backgroundImage: PropTypes.node.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    videoLink: PropTypes.node.isRequired,
    previewVideoLink: PropTypes.node.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
    runTime: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  })).isRequired,
  // reviews: PropTypes.arrayOf(PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  //   user: PropTypes.arrayOf(PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //     name: PropTypes.string.isRequired,
  //   })).isRequired,
  //   rating: PropTypes.number.isRequired,
  //   comment: PropTypes.string.isRequired,
  //   date: PropTypes.number.isRequired,
  // })).isRequired,
};

export default Movie;
