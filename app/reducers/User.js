import { USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS } from '../actions/ActionTypes';

const user = (state = {}, { type }) => {
  switch (type) {
    case USER_LOGIN_SUCCESS:
      return { isLogin: true };
    case USER_LOGOUT_SUCCESS:
      return { isLogin: false };
    default:
      return state;
  }
};
export default user;
