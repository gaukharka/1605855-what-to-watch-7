import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { resetGenreToInitial } from '../../store/action';
import { AppRoutes } from '../../consts';

function Logo(props) {
  const {isFooter} = props;

  const dispatch = useDispatch();

  return (
    <div className="logo" data-testid="app-logo">
      <Link
        to={AppRoutes.ROOT}
        className={`logo__link ${isFooter ? 'logo__link--light' : ''}`}
        onClick={() => async() => {
          await dispatch(resetGenreToInitial());
        }}
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

Logo.propTypes = {
  isFooter: PropTypes.bool,
};

export default Logo;
