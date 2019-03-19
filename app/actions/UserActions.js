import { Auth } from 'aws-amplify';

import { USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS } from './ActionTypes';

const loginSuccess = cognitoUser => ({
  type: USER_LOGIN_SUCCESS,
  cognitoUser,
});

export const logoutSuccess = () => ({
  type: USER_LOGOUT_SUCCESS,
});

export const currentAuthenticatedUser = () => Auth.currentAuthenticatedUser()
  .then(user => loginSuccess(user))
  .catch(err => console.log(err));
