import React, {useState} from 'react';

const ratings=[
  {value: 10, checked: false},
  {value: 9, checked: false},
  {value: 8, checked: false},
  {value: 7, checked: false},
  {value: 6, checked: false},
  {value: 5, checked: false},
  {value: 4, checked: false},
  {value: 3, checked: false},
  {value: 2, checked: false},
  {value: 1, checked: false},
];

function AddReviewForm() {
  const [userReview, setUserReview]=useState({
    rating: '',
    comment: '',
  });

  const [checkedRating, setCheckedRating]=useState(ratings);

  function handleCommentInput(evt){
    const comment=evt.target.value;
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
            {ratings.map((item, id) => (
              <>
                <input
                  key={item.id}
                  className="rating__input"
                  id={`star-${item.value}`}
                  type="radio"
                  name="rating"
                  value={item.value}
                  checked={ratings[id].checked}
                  onChange={({target}) => {
                    const checked=target.checked;
                    setCheckedRating([...checkedRating.slice(0, id), checked, checkedRating.slice(id+1)]);
                  }}
                />
                <label
                  key={item.id}
                  className="rating__label"
                  htmlFor={`star-${item.value}`}
                >
                    Rating {item.value}
                </label>
              </>
            ))}
          </div>
        </div>
        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text" id="review-text"
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
