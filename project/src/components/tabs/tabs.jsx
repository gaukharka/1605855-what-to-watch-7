import React, { useState } from 'react';
import PropTypes from 'prop-types';
import List from './list.jsx';
import Details from './details.jsx';
import Reviews from './reviews.jsx';

function Tabs(props){
  const {currentMovie} = props;
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
      {activeNav === 1 ? <List movie={currentMovie}/> : ''}
      {activeNav === 2 ? <Details movie={currentMovie}/> : ''}
      {activeNav === 3 ? <Reviews /> : ''}
    </div>
  );
}

Tabs.propTypes = {
  currentMovie: PropTypes.object.isRequired,
};

export default Tabs;
