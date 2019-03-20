import { Auth } from 'aws-amplify';

import { USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS } from './ActionTypes';

const loginSuccess = cognitoUser => ({
  type: USER_LOGIN_SUCCESS,
  cognitoUser,
});

const logoutSuccess = () => ({
  type: USER_LOGOUT_SUCCESS,
});

export const currentAuthenticatedUser = () => dispatch => Auth.currentAuthenticatedUser()
  .then(user => dispatch(loginSuccess(user)))
  .catch(err => console.log(err));

export const logout = () => dispatch => Auth.signOut()
  .then(() => dispatch(logoutSuccess()))
  .catch(err => console.log(err));
