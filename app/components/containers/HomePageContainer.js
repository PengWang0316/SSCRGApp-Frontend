import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

export default () => (
  <Link to="/test" data-testid="orderLink">
    <Typography color="textPrimary" variant="subtitle1">Test Page</Typography>
  </Link>
);
