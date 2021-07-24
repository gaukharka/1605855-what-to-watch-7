import React from 'react';
import Logo from '../logo/logo';
import { useDispatch } from 'react-redux';
import { reset as resetMovieList } from '../../store/action';

function Footer() {
  const dispatch = useDispatch();

  return (
    <footer className="page-footer" data-testid="footer">
      <Logo reset={dispatch(resetMovieList())} isFooter/>
      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
