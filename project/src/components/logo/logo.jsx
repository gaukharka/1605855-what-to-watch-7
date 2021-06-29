import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { ActionCreator } from '../../store/action';

function Logo(props) {
  const {reset} = props;

  return (
    <div className="logo">
      <Link to="/" className="logo__link" onClick={() => reset()}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

Logo.propTypes = {
  reset: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  reset() {
    dispatch(ActionCreator.reset());
  },
});

export {Logo};
export default connect(null, mapDispatchToProps)(Logo);
