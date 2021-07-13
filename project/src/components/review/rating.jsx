import React from 'react';
import PropTypes from 'prop-types';

function Rating(props) {
  const {rating, onChange} = props;
  return (
    <React.Fragment>
      <input
        className="rating__input"
        id={`star-${rating+1}`}
        type="radio"
        name="rating"
        value={rating+1}
        onChange={(evt) => onChange(evt)}
      />
      <label
        className="rating__label"
        htmlFor={`star-${rating+1}`}
      >
        Rating {rating+1}
      </label>
    </React.Fragment>
  );
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Rating;
