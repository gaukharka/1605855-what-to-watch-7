import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {reviewPropTypes} from '../../prop-types/review-prop-types';
import Review from './review';
function Reviews(props) {
  const {reviews} = props;

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

Reviews.propTypes={
  reviews: PropTypes.arrayOf(reviewPropTypes).isRequired,
};

const mapStateToProps = ({REVIEW}) => ({
  reviews: REVIEW.reviews,
});

export {Reviews};
export default connect(mapStateToProps, null)(Reviews);
