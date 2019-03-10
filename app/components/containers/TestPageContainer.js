import React from 'react';
import { Link } from 'react-router-dom';
import { withAuthenticator } from 'aws-amplify-react';
import { Typography } from '@material-ui/core';

const TestPageContainer = () => (
  <Link to="/" data-testid="orderLink">
    <Typography color="textPrimary" variant="subtitle1">HomePage</Typography>
  </Link>
);
export default withAuthenticator(TestPageContainer, true);
