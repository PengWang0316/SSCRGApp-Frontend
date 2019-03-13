import React, { useEffect } from 'react';
import { withAuthenticator } from 'aws-amplify-react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Auth, I18n } from 'aws-amplify';

import { amplifyAuthSignOption } from '../../config';
import { loginSuccess as loginSuccessAction } from '../../actions/UserActions';

const TestPageContainer = ({ user, loginSuccess }) => {
  useEffect(() => {
    if (!user) {
      Auth.currentAuthenticatedUser()
        .then(cognitoUser => loginSuccess(cognitoUser)).catch(err => console.log(err));
    }
  });
  return <Typography color="textPrimary" variant="h6">{I18n.get('testPageContent')}</Typography>;
};

TestPageContainer.propTypes = {
  user: PropTypes.object,
  loginSuccess: PropTypes.func.isRequired,
};
TestPageContainer.defaultProps = { user: null };

/* istanbul ignore next */
const mapStateToProps = state => ({ user: state.user });
/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
  loginSuccess: user => dispatch(loginSuccessAction(user)),
});

export default withAuthenticator(
  connect(mapStateToProps, mapDispatchToProps)(TestPageContainer),
  amplifyAuthSignOption,
);
