import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { ActionCreator } from '../../store/action';

function LoadMoreButton(props) {
  const {onClickShowMoreMovies} = props;
  /* eslint-disable no-console */
  console.log(onClickShowMoreMovies);

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

const mapDispatchToProps = (dispatch) => ({
  onClickShowMoreMovies() {
    dispatch(ActionCreator.getMaxCountOfMovies());
  },
});

export {LoadMoreButton};
export default connect(null, mapDispatchToProps)(LoadMoreButton);
