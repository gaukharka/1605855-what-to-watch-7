import React from 'react';
import Logo from '../logo/logo';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { reset as resetMovieList } from '../../store/action';

function Footer(props) {
  const {reset} = props;

  return (
    <footer className="page-footer">
      <Logo reset={reset} isFooter/>
      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  reset: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  reset() {
    dispatch(resetMovieList());
  },
});

export {Footer};
export default connect(null, mapDispatchToProps)(Footer);
