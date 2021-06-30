import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router';
import {AppRoute} from '../../consts';

function PlayButton(props) {
  const {id} = props;
  const history = useHistory();

  return (
    <button
      className="btn btn--play film-card__button"
      type="button"
      onClick={() => history.push(`${AppRoute.PLAYER}/${id}`)}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
}

PlayButton.propTypes={
  id: PropTypes.number.isRequired,
};

export default PlayButton;