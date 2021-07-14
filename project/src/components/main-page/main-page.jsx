import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from '../movie-list/movie-list';
import { useHistory } from 'react-router';
import Logo from '../logo/logo';
import Footer from '../footer/footer';
import Genres from '../genre-list/genre-list';
import UserBlock from '../user-block/user-block';
// import PlayButton from '../buttons/button-play';
import MyListButton from '../buttons/button-my-list';
import HiddenPart from './hidden-part';
import { getPromoMovie } from '../../store/movie-data/selectors';

function MainPage() {
  const promoMovie = useSelector(getPromoMovie);
  const {id, name, genre, released, posterImage, backgroundImage} = promoMovie;

  const history = useHistory();

  return (
    <>
      <HiddenPart />
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />
          <UserBlock/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                {/* <PlayButton id={id}/> */}
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                  onClick={() => history.push(`/player/${id}`)}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <MyListButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <Genres />
          <MovieList />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
