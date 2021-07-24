import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../consts';
import { requireAuthorization, logout } from '../action';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  authInfo: {},
};

export const userData = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload.authStatus;
      state.authInfo = action.payload.authInfo;
    })
    .addCase(logout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
      state.authInfo = {};
    });
});
