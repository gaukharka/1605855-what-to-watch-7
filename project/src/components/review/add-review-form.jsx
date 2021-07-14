import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { postReview } from '../../store/api-actions';
import { ReviewLength } from '../../consts';
import Rating from './rating';

function AddReviewForm(props) {
  const {id} = props;

  const [review, setReview] = useState({
    rating: null,
    comment: '',
  });

  const history = useHistory();
  const dispatch = useDispatch();

  const validate = () => {
    if (review.rating === null || review.comment.length < ReviewLength.MIN || review.comment.length > ReviewLength.MAX) {
      return false;
    }

    return true;
  };

  function handleChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;

    setReview({
      ...review,
      [name]: value,
    });
  }

  const onReviewSubmit = (evt) => {
    evt.preventDefault();
    dispatch(postReview(id, review, history));
  };

  return (
    <div className="add-review">
      <form
        action="#"
        className="add-review__form"
        onSubmit={onReviewSubmit}
        disabled={!validate()}
      >
        <div className="rating">
          <div className="rating__stars">
            {[...Array(10).keys()].reverse().map((rating, idx) => {
              const ratingValue=rating+1;
              return (
                <Rating
                  key={ratingValue}
                  rating={rating}
                  onChange={handleChange}
                />
              );
            })}
          </div>
        </div>
        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="comment"
            id="review-text"
            placeholder="Review text"
            value={review.comment}
            onChange={handleChange}
          >
          </textarea>
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={!validate()}
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

AddReviewForm.propTypes = {
  id: PropTypes.number.isRequired,
};

export default AddReviewForm;
