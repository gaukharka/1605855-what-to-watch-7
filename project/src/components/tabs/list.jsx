import React from 'react';
import { useSelector } from 'react-redux';
import { getMovie } from '../../store/movie-data/selectors';
import { getRating } from '../../consts';

function List() {
  const currentMovie = useSelector(getMovie);

  const {rating, scoresCount, description, director, starring} = currentMovie;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">
          {rating}
        </div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRating(rating)}</span>
          <span className="film-rating__count">
            {scoresCount} ratings
          </span>
        </p>
      </div>
      <div className="film-card__text">
        <p>Description</p>
        <p>{description}</p>
        <p className="film-card__director">
          <strong>Director: {director}</strong>
        </p>
        <p className="film-card__starring">
          <strong>Starring: {starring}</strong>
        </p>
      </div>
    </>
  );
}

export default List;
