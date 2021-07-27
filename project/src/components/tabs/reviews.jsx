import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchReviewList } from '../../store/api-actions';
import { getReviews } from '../../store/review/selectors.js';

import Review from './review';

function Reviews({id}) {

  const reviews = useSelector(getReviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviewList(id));
  }, []);

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

Reviews.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Reviews;
