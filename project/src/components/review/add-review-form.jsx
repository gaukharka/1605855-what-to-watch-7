import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router';
import {connect} from 'react-redux';
import {postReview} from '../../store/api-actions';
import {ReviewLength} from '../../consts';

function AddReviewForm(props) {
  const {id, postUserReview} = props;

  const [review, setReview] = useState({
    rating: null,
    comment: '',
  });

  const errorMessage = '*Please, dont forget to rate this movie and your review length should not be less than 50 and more than 140';

  const history = useHistory();

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
    const isValid = validate();

    if(isValid) {
      postUserReview(id, review, history);
    }
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
            {[...Array(10).keys()].reverse().map((item, idx) => {
              const ratingValue=item+1;
              return (
                <React.Fragment key={ratingValue}>
                  <input
                    className="rating__input"
                    id={`star-${ratingValue}`}
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onChange={(evt) => handleChange(evt)}
                  />
                  <label
                    className="rating__label"
                    htmlFor={`star-${ratingValue}`}
                  >
                    Rating {ratingValue}
                  </label>
                </React.Fragment>
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
            onChange={(evt) => handleChange(evt)}
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
        {!validate() &&
          <div style={{ fontSize: 12, color: 'red' }}>
            {errorMessage}
          </div>}
      </form>
    </div>
  );
}

AddReviewForm.propTypes = {
  id: PropTypes.number.isRequired,
  postUserReview: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  isFetching: state.isFetching,
});

const mapDispatchToProps = (dispatch) =>({
  postUserReview(id, review, history) {
    dispatch(postReview(id, review, history));
  },
});

export {AddReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(AddReviewForm);
