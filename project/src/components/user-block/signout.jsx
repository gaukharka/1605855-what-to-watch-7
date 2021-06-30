import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts';

function SignOut() {

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <Link to={AppRoute.ROOT} className="user-block__link">Sign out</Link>
      </li>
    </ul>);
}

export default SignOut;
