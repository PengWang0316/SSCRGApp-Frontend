import { USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS } from './ActionTypes';

export const loginSuccess = () => ({
  type: USER_LOGIN_SUCCESS,
});

export const logoutSuccess = () => ({
  type: USER_LOGOUT_SUCCESS,
});
