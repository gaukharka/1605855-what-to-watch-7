import React from 'react';
import {Link, useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../logo/logo.jsx';
import AddReviewForm from './add-review-form.jsx';
import SignOut from '../user-block/signout.jsx';

function Review(props) {
  const {movies}=props;
  const params=useParams();
  const [currentMovie]=movies.filter((item) => item.id===+params.id);
  const {id, name, previewImage}=currentMovie;


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
          <SignOut />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={previewImage} alt={name} width="218" height="327" />
        </div>
      </div>
      <AddReviewForm />
    </section>
  );
}

Review.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    previewImage: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default Review;
