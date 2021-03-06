import React from 'react';
import PropTypes from 'prop-types';

function PlayButton(props) {
  const {onClick} = props;

  return (
    <button
      className="btn btn--play film-card__button"
      type="button"
      onClick={onClick}
      data-testid="button-play"
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
}

PlayButton.propTypes={
  onClick: PropTypes.func.isRequired,
};

export default PlayButton;
