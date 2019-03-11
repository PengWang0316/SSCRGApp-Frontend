import { USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS } from './ActionTypes';

export const loginSuccess = cognitoUser => ({
  type: USER_LOGIN_SUCCESS,
  cognitoUser,
});

export const logoutSuccess = () => ({
  type: USER_LOGOUT_SUCCESS,
});
