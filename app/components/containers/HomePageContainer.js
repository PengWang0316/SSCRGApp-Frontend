import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import { Auth } from 'aws-amplify';
import I18n from '@kevinwang0316/i18n';
import PropTypes from 'prop-types';

import { loginSuccess as loginSuccessAction } from '../../actions/UserActions';

const HomePage = ({ user, loginSuccess }) => {
  useEffect(() => {
    if (!user) {
      Auth.currentAuthenticatedUser()
        .then(cognitoUser => loginSuccess(cognitoUser))
        .catch(err => console.log(err));
    }
  });

  return <Typography color="textPrimary" variant="h6">{I18n.get('homePageContent')}</Typography>;
};

HomePage.propTypes = {
  user: PropTypes.object,
  loginSuccess: PropTypes.func.isRequired,
};
HomePage.defaultProps = { user: null };

/* istanbul ignore next */
const mapStateToProps = state => ({ user: state.user });
/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
  loginSuccess: user => dispatch(loginSuccessAction(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
