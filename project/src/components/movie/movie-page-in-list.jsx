import React from 'react-dom';
import PropTypes from 'prop-types';

function MoviePageInList(props) {
  const {rating, scoresCount, description, director, starring}=props.movie;

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
        <p>{description}</p>
        <p>{description}</p>
        <p className="film-card__director">
          <strong>Director:
            {director}
          </strong>
        </p>
        <p className="film-card__starring">
          <strong>Starring:
            {starring.reduce((prev, curr) => [prev, ', ', curr])}
          </strong>
        </p>
      </div>
    </>
  );
}

MoviePageInList.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
  }).isRequired,
};

export default MoviePageInList;
