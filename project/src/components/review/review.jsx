import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Logo from '../logo/logo.jsx';
import UserBlock from '../user-block/user-block';
import { getMovies } from '../../store/movie-data/selectors';

import AddReviewForm from './add-review-form';

function Review() {
  const movies = useSelector(getMovies);
  const params = useParams();
  const [currentMovie] = movies.filter((item) => item.id === +params.id);
  const {id, name, previewImage} = currentMovie;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={previewImage} alt={name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}/review`} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>
          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={previewImage} alt={name} width="218" height="327" />
        </div>
      </div>
      <AddReviewForm id={id}/>
    </section>
  );
}

export default Review;
