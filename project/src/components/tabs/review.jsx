import React from 'react';
import PropTypes from 'prop-types';
import dateFormat from 'dateformat';

function Review(props) {
  const {review}=props;

  return (
    <div
      className="review"
    >
      <blockquote className="review__quote">
        <p className="review__text">
          {review.comment}
        </p>
        <footer className="review__details">
          <cite className="review__author">
            {review.user.name}
          </cite>
          <time
            className="review__date"
            dateTime="2016-12-24"
          >
            {dateFormat(review.date, 'yyyy-mm-dd')}
          </time>
        </footer>
      </blockquote>
      <div className="review__rating">
        {review.rating}
      </div>
    </div>
  );
}

Review.propTypes={
  review: PropTypes.object.isRequired,
};

export default Review;
