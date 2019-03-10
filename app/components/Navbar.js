import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  MenuItem, Menu, IconButton, Hidden, Button, Typography, Toolbar, AppBar, Avatar,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import orange from '@material-ui/core/colors/orange';
import { Auth } from 'aws-amplify';

import {
  HOME_PAGE_URL, TEST_PAGE_URL,
} from '../config';


/* istanbul ignore next */
const styles = theme => ({
  link: {
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
  },
  menuLink: {
    textDecoration: 'none',
  },
  flex1: {
    flex: 1,
  },
  appbar: {
    maxHeight: 55,
    position: 'sticky',
    top: 0,
  },
  avatar: {
    width: 26,
    height: 26,
    marginRight: 8,
    color: '#fff',
    backgroundColor: orange[800],
  },
});

/** Navbar component */
export class Navbar extends Component {
  static propTypes = { classes: PropTypes.object.isRequired };

  state = { anchorEl: null, user: {} };

  /**
   * Get the authentication user information.
   * @param {object} props contains all component's prop value
   */
  componentDidMount() {
    Auth.currentAuthenticatedUser().then(user => this.setState({ user }));
  }

  /**
   * Changing anchorEl state to an click target element or null.
   * @return {null} No Return.
   */
  handleMenuIconClick = ({ currentTarget }) => this.setState(({ anchorEl }) => ({
    anchorEl: anchorEl ? null : currentTarget,
  }));

  /**
   * Showing the login dialog when the user did not login and logout
   * a user if the user has already login.
   * @return {null} No return.
   */
  handleLoginButtonClick = () => {};

  /**
   * The render method to render the jsx.
   * @return {jsx} Return jsx.
   */
  render() {
    const { classes } = this.props;
    const { anchorEl, user } = this.state;
    return (
      <AppBar position="static" className={classes.appbar} data-testid="navbar">
        <Toolbar>
          <Link to={HOME_PAGE_URL} className={`${classes.link} ${classes.flex1}`} data-testid="titleLink">
            <Typography variant="h6" color="inherit">SSCRG CLUB</Typography>
          </Link>
          <Hidden only="xs">
            <Link to={TEST_PAGE_URL} className={classes.link}>
              <Button color="inherit" data-testid="testButton">Test</Button>
            </Link>
            <Button color="inherit" data-testid="otherButton">Other</Button>
            <Button color="inherit" onClick={this.handleLoginButtonClick} data-testid="loginButton">
              {user.username ? (
                <Fragment>
                  <Avatar className={classes.avatar}><Typography color="inherit">{user.attributes.nickname.charAt(0)}</Typography></Avatar>
                  <Typography color="inherit">Logout</Typography>
                </Fragment>
              ) : 'Login'}
            </Button>
          </Hidden>
          <Hidden only={['xl', 'lg', 'md', 'sm']}>
            <IconButton
              color="inherit"
              aria-label="Menu"
              onClick={this.handleMenuIconClick}
              aria-owns={anchorEl ? 'simple-menu' : null}
              aria-haspopup="true"
              data-testid="navbarDropMenuButton"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleMenuIconClick}
              data-testid="dropDownMenu"
            >
              <MenuItem>
                <Link to={TEST_PAGE_URL} className={classes.menuLink} data-testid="testLink">
                  <Typography color="textPrimary">Test</Typography>
                </Link>
              </MenuItem>
              <MenuItem>
                <Typography color="textPrimary">Other</Typography>
              </MenuItem>
              <MenuItem onClick={this.handleLoginButtonClick} data-testid="loginMenu">
                {user.username ? (
                  <Fragment>
                    <Avatar className={classes.avatar}><Typography color="inherit">{user.attributes.nickname.charAt(0)}</Typography></Avatar>
                    <Typography color="textPrimary">Logout</Typography>
                  </Fragment>
                ) : 'Login'}
              </MenuItem>
            </Menu>
          </Hidden>
        </Toolbar>
      </AppBar>
    );
  }
}

/* Putting the withRouter to the first position because when test code mocks Link
the withRouter also has to be mocked. But it is hard to really return a react
component to satisfy the whole chain call. */
export default withRouter((withStyles(styles)(Navbar)));
