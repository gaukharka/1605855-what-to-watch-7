import React from 'react';
import PropTypes from 'prop-types';
import dateFormat from 'dateformat';

function Review(props) {
  const {reviews}=props;

  return (
    <div className="film-card__reviews-col">
      {reviews.map((item) => (
        <div
          key={item.id+1}
          className="review"
        >
          <blockquote className="review__quote">
            <p className="review__text">
              {item.comment}
            </p>
            <footer className="review__details">
              <cite className="review__author">
                {item.user.name}
              </cite>
              <time
                className="review__date"
                dateTime="2016-12-24"
              >
                {dateFormat(item.date, 'yyyy-mm-dd')}
              </time>
            </footer>
          </blockquote>
          <div className="review__rating">
            {item.rating}
          </div>
        </div>
      ))}
    </div>);
}

Review.propTypes={
  reviews: PropTypes.array.isRequired,
};

export default Review;
