import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoutes, AuthorizationStatus} from '../../consts';
import {logout} from '../../store/api-actions';

function UserBlock(props) {
  const {authorizationStatus, handleLogout} = props;

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
                handleLogout();
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

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  authInfo: state.authInfo,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout() {
    dispatch(logout());
  },
});

export {UserBlock};
export default connect(mapStateToProps, mapDispatchToProps)(UserBlock);
