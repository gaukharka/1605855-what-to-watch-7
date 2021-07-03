import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {reviewPropTypes} from '../../prop-types/review-prop-types';
import dateFormat from 'dateformat';
import LoadingScreen from '../loading-screen/loading-screen';

function Review(props) {
  const {reviews, isReviewListLoaded}=props;

  if(!isReviewListLoaded) {
    return <LoadingScreen />;
  }

  return (
    <div className="film-card__reviews-col">
      {reviews.map((item) => (
        <div
          key={item.user.id}
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
  reviews: PropTypes.arrayOf(reviewPropTypes).isRequired,
  isReviewListLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  reviews: state.reviews,
  isReviewListLoaded: state.isReviewListLoaded,
});

export {Review};
export default connect(mapStateToProps, null)(Review);
