import React from 'react';
import PropTypes from 'prop-types';
import {Link, useParams} from 'react-router-dom';
import {moviePropTypes} from '../../prop-types/movie-prop-types';
import {reviewPropTypes} from '../../prop-types/review-prop-types';
import Logo from '../logo/logo.jsx';
import SignOut from '../user-block/signout.jsx';
import PlayButton from '../buttons/button-play.jsx';
import MyListButton from '../buttons/button-my-list.jsx';
import TabLinks from '../tabs/tabs.jsx';
import SimiliarMovies from '../similiar-movies/similiar-movies.jsx';
import Footer from '../footer/footer.jsx';

function Movie(props) {
  const {movies, reviews} = props;
  const params = useParams();
  const [currentMovie] = movies.filter((item) => item.id === +params.id);
  const {id, name, previewImage, genre, released, backgroundImage} = currentMovie;

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
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
                <PlayButton />
                <MyListButton />
                <Link
                  to={`/films/${id}/review`}
                  className="btn film-card__button"
                >Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={previewImage} alt={name} width="218" height="327" />
            </div>
            <TabLinks
              currentMovie={currentMovie}
              reviews={reviews}
            />
          </div>
        </div>
      </section>
      <div className="page-content">
        <SimiliarMovies currentMovie={currentMovie} movies={movies}/>
        <Footer />
      </div>
    </>
  );
}

Movie.propTypes={
  movies: PropTypes.arrayOf(moviePropTypes).isRequired,
  reviews: PropTypes.arrayOf(reviewPropTypes).isRequired,
};

export default Movie;
