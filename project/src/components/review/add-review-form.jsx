import React, {useState} from 'react';

function AddReviewForm() {
  const [userReview, setUserReview]=useState({
    rating: null,
    comment: '',
  });

  function handleChange(evt) {
    evt.preventDefault();
    const name = evt.target.name;
    const value = evt.target.value;

    setUserReview({
      ...userReview,
      [name]: value,
    });
  }

  return (
    <div className="add-review">
      <form
        action="#"
        className="add-review__form"
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
                    onChange={handleChange}
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
            value={userReview.comment}
            onChange={handleChange}
          >
          </textarea>
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;
