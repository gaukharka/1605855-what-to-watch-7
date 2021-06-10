import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo.jsx';
import AddReviewForm from './add-review-form.jsx';
import SignOut from '../user-block/signout.jsx';

function Review() {

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to="/player/:id" className="breadcrumbs__link">The Grand Budapest Hotel</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to="/films/:id/review" className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>
          <SignOut />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>
      <AddReviewForm />
    </section>
  );
}

export default Review;
