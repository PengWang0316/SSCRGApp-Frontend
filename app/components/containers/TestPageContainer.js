import React from 'react';
import { withAuthenticator } from 'aws-amplify-react';
import { Typography } from '@material-ui/core';

import { amplifyAuthSignOption } from '../../config';

const TestPageContainer = () => (
  <Typography color="textPrimary" variant="h6">This is the Test Page</Typography>
);
export default withAuthenticator(TestPageContainer, amplifyAuthSignOption);
