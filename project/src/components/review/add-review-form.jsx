import React, {useState} from 'react';

const ratings=[10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function AddReviewForm() {
  const [userReview, setUserReview]=useState({
    rating: '',
    comment: '',
  });

  const [checkedRating, setCheckedRating] = useState([false, false, false, false, false, false, false, false, false, false]);

  function handleCommentInput(evt){
    const comment = evt.target.value;
    setUserReview({...userReview, comment: comment});
  }

  return (
    <div className="add-review">
      <form
        action="#"
        className="add-review__form"
        onSubmit={(evt) => {
          evt.preventDefault();
          setUserReview(() => {});
        }}
      >
        <div className="rating">
          <div className="rating__stars">
            {ratings.map((item, idx) => (
              <React.Fragment key={item+1}>
                <input
                  className="rating__input"
                  id={`star-${item}`}
                  type="radio"
                  name="rating"
                  value={item}
                  checked={checkedRating[idx]}
                  onChange={({target}) => {
                    const value=target.checked;
                    setCheckedRating([...checkedRating.slice(0, idx), value, ...checkedRating.slice(idx+1)]);
                  }}
                />
                <label
                  className="rating__label"
                  htmlFor={`star-${item}`}
                >
                  Rating {item}
                </label>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            value={userReview.comment}
            onChange={handleCommentInput}
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
