import React, {useState} from 'react';
import PropTypes from 'prop-types';
import MoviePageInList from './movie-page-in-list.jsx';
import MoviePageDetails from './movie-page-details.jsx';
import MoviePageReviews from './movie-page-reviews.jsx';

function NavLinks(props){
  const {currentMovie, reviews} = props;
  const [activeNav, setActiveNav] = useState(1);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={activeNav === 1 ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <a
              href="/#"
              className="film-nav__link"
              onClick={(evt) => {
                evt.preventDefault();
                setActiveNav(1);
              }}
            >Overview
            </a>
          </li>
          <li className={activeNav === 2 ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <a
              href="/#"
              className="film-nav__link"
              onClick={(evt) => {
                evt.preventDefault();
                setActiveNav(2);
              }}
            >
              Details
            </a>
          </li>
          <li className={activeNav === 3 ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <a
              href="/#"
              className="film-nav__link"
              onClick={(evt) => {
                evt.preventDefault();
                setActiveNav(3);
              }}
            >Reviews
            </a>
          </li>
        </ul>
      </nav>
      {activeNav === 1 ? <MoviePageInList movie={currentMovie}/> : ''}
      {activeNav === 2 ? <MoviePageDetails movie={currentMovie}/> : ''}
      {activeNav === 3 ? <MoviePageReviews reviews={reviews}/> : ''}
    </div>
  );
}

NavLinks.propTypes = {
  currentMovie: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired,
};

export default NavLinks;
