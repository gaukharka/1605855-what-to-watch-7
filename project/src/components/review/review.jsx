import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo.jsx';
import UserBlock from '../user-block/user-block';
import { getMovie } from '../../store/movie-data/selectors';
import AddReviewForm from './add-review-form';

function Review({id}) {
  const movie = useSelector(getMovie);

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={movie.previewImage} alt={movie.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`} className="breadcrumbs__link">{movie.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}/review`} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>
          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={movie.previewImage} alt={movie.name} width="218" height="327" />
        </div>
      </div>
      <AddReviewForm id={id}/>
    </section>
  );
}

Review.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Review;
