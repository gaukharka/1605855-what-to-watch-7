import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from '../movie-list/movie-list';
import { useHistory } from 'react-router';
import Logo from '../logo/logo';
import Footer from '../footer/footer';
import Genres from '../genre-list/genre-list';
import UserBlock from '../user-block/user-block';
import PlayButton from '../buttons/play-button';
import MyListButton from '../buttons/button-my-list';
import HiddenPart from './hidden-part';
import { getMovies, getPromoMovie } from '../../store/movie-data/selectors';

function MainPage() {
  const promoMovie = useSelector(getPromoMovie);
  const movies = useSelector(getMovies);
  const {id, name, genre, released, posterImage, backgroundImage} = promoMovie;

  const history = useHistory();

  const handlePlayButtonClick = () => history.push(`/player/${id}`);

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
                <PlayButton
                  onClick={handlePlayButtonClick}
                />
                <MyListButton movie={promoMovie} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <Genres />
          <MovieList movies={movies}/>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
