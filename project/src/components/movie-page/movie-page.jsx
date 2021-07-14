import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import MyListButton from '../buttons/button-my-list';
import TabLinks from '../tabs/tabs';
import SimiliarMovies from '../similiar-movies/similiar-movies';
import Footer from '../footer/footer';
import { AuthorizationStatus } from '../../consts';
import { getAuthorizationStatus } from '../../store/user/selectors';
import { getMovies } from '../../store/movie-data/selectors';

function MoviePage() {
  const movies = useSelector(getMovies);
  const params = useParams();
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const history = useHistory();

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
            <UserBlock />
          </header>

          <div className="film-card__wrap">
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
                {
                  authorizationStatus === AuthorizationStatus.AUTH &&
                    <Link
                      to={`/films/${id}/review`}
                      className="btn film-card__button"
                    >Add review
                    </Link>
                }
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
              id={id}
            />
          </div>
        </div>
      </section>
      <div className="page-content">
        <SimiliarMovies
          currentMovie={currentMovie}
        />
        <Footer />
      </div>
    </>
  );
}

export default MoviePage;
