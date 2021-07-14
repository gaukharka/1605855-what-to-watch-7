import React from 'react';
import PropTypes from 'prop-types';
import { reviewPropTypes } from '../../prop-types/review-prop-types';

function Comment(props) {
  const {review, onChange, disabled} = props;

  return (
    <div className="add-review__text">
      <textarea
        className="add-review__textarea"
        name="comment"
        id="review-text"
        placeholder="Review text"
        value={review.comment}
        onChange={onChange}
      >
      </textarea>
      <div className="add-review__submit">
        <button
          className="add-review__btn"
          type="submit"
          disabled={disabled}
        >
          Post
        </button>
      </div>
    </div>
  );
}

Comment.propTypes = {
  review: reviewPropTypes,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default Comment;
