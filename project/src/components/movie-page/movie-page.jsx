import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import MyListButton from '../buttons/my-list-button';
import PlayButton from '../buttons/play-button';
import Tabs from '../tabs/tabs';
import SimilarMovies from '../similar-movies/similar-movies';
import Footer from '../footer/footer';
import { AppRoutes, AuthorizationStatus } from '../../consts';
import { getAuthorizationStatus } from '../../store/user/selectors';
import { getMovie } from '../../store/movie-data/selectors';
import { fetchMovie } from '../../store/api-actions';

function MoviePage({id}) {
  const movie = useSelector(getMovie);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const history = useHistory();
  const dispatch = useDispatch();

  const handlePlayButtonClick = () => history.push(`/player/${id}`);

  const isAuth = authorizationStatus === AuthorizationStatus.AUTH ? `/films/${id}/review` : `${AppRoutes.LOGIN}`;

  useEffect(() => {
    dispatch(fetchMovie(id));
  }, []);

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero" data-testid="film-card-hero">
          <div className="film-card__bg">
            <img src={movie.backgroundImage} alt={movie.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />
            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{movie.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{movie.genre}</span>
                <span className="film-card__year">{movie.released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayButton
                  onClick={handlePlayButtonClick}
                />
                <MyListButton movie={movie}/>
                <Link
                  to={isAuth}
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
              <img src={movie.previewImage} alt={movie.name} width="218" height="327" />
            </div>
            <Tabs/>
          </div>
        </div>
      </section>
      <div className="page-content">
        <SimilarMovies/>
        <Footer />
      </div>
    </>
  );
}

MoviePage.propTypes = {
  id: PropTypes.number.isRequired,
};

export default MoviePage;
