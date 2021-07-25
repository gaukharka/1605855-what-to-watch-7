import { userData } from './user';
import { ActionType } from '../action';
import { AuthorizationStatus } from '../../consts';

const user = {login: 'test@gmail.com', password: '12345'};

const initialStateUnknown = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  authInfo: {},
};

const initialStateAuth = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  authInfo: user,
};

describe('Reducer: userdata', () => {
  it('without additional parameters should return initial state', () => {
    expect(userData(undefined, {}))
      .toEqual(initialStateUnknown);
  });

  it('should update authorizationStatus to "AUTH"', () => {
    const state = initialStateUnknown;

    const requiredAuthorizationAction = {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: {
        authStatus: AuthorizationStatus.AUTH,
        authInfo: user,
      },
    };

    expect(userData(state, requiredAuthorizationAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.AUTH,
        authInfo: user,
      });
  });

  it('should update authorizationStatus to "NO_AUTH"', () => {
    const state = initialStateAuth;
    const requiredLogoutAction = {
      type: ActionType.LOGOUT,
    };

    expect(userData(state, requiredLogoutAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authInfo: {},
      });
  });
});
