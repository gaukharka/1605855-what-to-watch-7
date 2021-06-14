import React from 'react';
import PropTypes from 'prop-types';
import MoviePageReview from './movie-page-review';

function MoviePageReviews(props) {
  const {reviews} = props;

  return (
    <div className="film-card__reviews film-card__row">
      <MoviePageReview
        reviews={reviews}
      />
    </div>
  );
}

MoviePageReviews.propTypes={
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,
};

export default MoviePageReviews;
