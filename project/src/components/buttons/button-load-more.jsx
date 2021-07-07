import React from 'react';
import PropTypes from 'prop-types';

function LoadMoreButton(props) {
  const {onClickShowMoreMovies} = props;

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => onClickShowMoreMovies()}
      >Show more
      </button>
    </div>
  );
}

LoadMoreButton.propTypes = {
  onClickShowMoreMovies: PropTypes.func.isRequired,
};

export default LoadMoreButton;
