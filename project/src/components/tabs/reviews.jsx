import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {reviewPropTypes} from '../../prop-types/review-prop-types';
import Review from './review.jsx';

function Reviews(props) {
  const {reviews} = props;

  return (
    <div className="film-card__reviews film-card__row">
      <Review reviews={reviews}/>
    </div>
  );
}

Reviews.propTypes={
  reviews: PropTypes.arrayOf(reviewPropTypes).isRequired,
};

const mapStateToProps = (state) => ({
  reviews: state.reviews,
});

export {Reviews};
export default connect(mapStateToProps, null)(Reviews);
