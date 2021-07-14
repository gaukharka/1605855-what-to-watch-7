import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { AppRoutes, AuthorizationStatus } from '../../consts';
import { logout } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user/selectors';

function UserBlock() {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <ul className="user-block">
      {authorizationStatus === AuthorizationStatus.AUTH ?
        <>
          <li className="user-block__item">
            <div
              className="user-block__avatar"
              onClick={() => history.push(`${AppRoutes.MYLIST}`)}
            >
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <Link
              to={AppRoutes.ROOT}
              className="user-block__link"
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(logout());
              }}
            >Sign out
            </Link>
          </li>
        </> :
        <Link
          to={AppRoutes.LOGIN}
          className="user-block__link"
        >Sign in
        </Link>}
    </ul>);
}

export default UserBlock;
