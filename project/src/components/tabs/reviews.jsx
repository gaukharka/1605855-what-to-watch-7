import React from 'react';
import { useSelector } from 'react-redux';
import Review from './review';
import { getReviews } from '../../store/review/selectors';
function Reviews() {
  const reviews = useSelector(getReviews);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => (
          <Review
            key={review.id+1}
            review={review}
          />
        ))}
      </div>
    </div>
  );
}

export default Reviews;
