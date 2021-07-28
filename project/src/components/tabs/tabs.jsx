import React, {  useState } from 'react';
import { useSelector } from 'react-redux';
import { getMovie } from '../../store/movie-data/selectors';
import List from './list.jsx';
import Details from './details.jsx';
import Reviews from './reviews.jsx';

function Tabs(){
  const currentMovie = useSelector(getMovie);

  const [activeNav, setActiveNav] = useState(1);

  return (
    <div className="film-card__desc" data-testid="tabs">
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
      {activeNav === 1 ? <List /> : ''}
      {activeNav === 2 ? <Details movie={currentMovie}/> : ''}
      {activeNav === 3 ? <Reviews id={currentMovie.id}/> : ''}
    </div>
  );
}

export default Tabs;
