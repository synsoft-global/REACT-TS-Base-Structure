/*
 * Created on Sun Dec 23 2018
 *
 * Copyright (c) 2019 Synsoft Global
 */

import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import MyButton from 'src/components/custombuttons/Button';
import { Button } from 'src/components/button';
import CustomInput from 'src/components/custominput/CustomInput';
import { Dashboard, Notifications, Person, Search } from '@material-ui/icons';
import { Hidden, IconButton, WithStyles, withStyles } from '@material-ui/core';

// import classNames from 'classnames';
import styles from 'src/assets/jss/material-dashboard-react/headerLinksStyle';

// import { Manager, Popper, Reference } from 'react-popper';

interface IHeaderLinksOwnProps extends RouteComponentProps, WithStyles<typeof styles> { }

// tslint:disable-next-line:no-empty-interface
interface IHeaderLinksProps extends IHeaderLinksOwnProps {
  // doLogout: () => void
}

interface IHeaderLinksState {
  open: boolean;
}

class HeaderLinks extends React.Component<IHeaderLinksProps, IHeaderLinksState> {
  public state = {
    open: false
  };

  public handleClickLogout = () => {
    console.log('LOGOUT');
    // const { doLogout } = this.props;
    // doLogout();
  };

  public render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div className="header_right_place">
        <CustomInput
          formControlProps={{
            className: classes.margin + ' search_padding ' + classes.search
          }}
          inputProps={{
            placeholder: 'Search',
            inputProps: {
              'aria-label': 'Search'
            }
          }}
        />
        <Button.Icon color='white' aria-label='edit' customClass={classes.margin + ' ' + classes.searchButton}>
          <Search className={classes.searchIcon} />
        </Button.Icon>
        <IconButton color='inherit' aria-label='Dashboard' className={classes.buttonLink}>
          <Dashboard className={classes.links} />
          <Hidden mdUp={true}>
            <p className={classes.linkText}>Dashboard</p>
          </Hidden>
        </IconButton>
        {/* <Manager style={{ display: 'inline-block' }}> */}
        {/* <Target> */}
        <IconButton
          color='inherit'
          aria-label='Notifications'
          aria-owns={open ? 'menu-list' : undefined}
          aria-haspopup='true'
          onClick={this.handleClick}
          className={classes.buttonLink}>
          <Notifications className={classes.links} />
          <span className={classes.notifications}>5</span>
          <Hidden mdUp={true}>
            <p onClick={this.handleClick} className={classes.linkText}>
              Notification
            </p>
          </Hidden>
        </IconButton>

        <IconButton color='inherit' aria-label='Person' className={classes.buttonLink}>
          <Person className={classes.links} />
          <Hidden mdUp={true}>
            <p className={classes.linkText}>Profile</p>
          </Hidden>
        </IconButton>
        <MyButton color='primary' size='sm' className={classes.marginRight} onClick={this.handleClickLogout}>
          Logout
        </MyButton>
      </div>
    );
  }

  private handleClick = () => {
    this.setState({ open: !this.state.open });
  };

}

export default withRouter(withStyles(styles)(HeaderLinks));
