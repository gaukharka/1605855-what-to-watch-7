import React from 'react';
import { moviePropTypes } from '../../prop-types/movie-prop-types';

function List(props) {
  const {rating, scoresCount, description, director, starring} = props.movie;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">
          {rating}
        </div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
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
          <strong>Starring: {starring.reduce((prev, curr) => [prev, ', ', curr])}</strong>
        </p>
      </div>
    </>
  );
}

List.propTypes = {
  movie: moviePropTypes,
};

export default List;
