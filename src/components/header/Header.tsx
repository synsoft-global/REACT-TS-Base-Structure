/*
 * Created on Sun Dec 23 2018
 *
 * Copyright (c) 2019 Synsoft Global
 */

import * as React from 'react';

import { AppBar, Button, Hidden, IconButton, Toolbar, WithStyles, withStyles } from '@material-ui/core';
import { IRoute, TRouteOrDivider, TRoutes } from 'src/routes';

import HeaderLinks from './HeaderLinks';
import { Menu } from '@material-ui/icons';
import cx from 'classnames';
import headerStyle from 'src/assets/jss/material-dashboard-react/headerStyle';

const styles = headerStyle;

interface IHeaderProps extends WithStyles<typeof styles> {
  classes: any;
  color?: any;
  handleDrawerToggle: any;
  /** added by react router */
  location?: {
    pathname: string;
  };
  routes: TRoutes;
}

/** user-defined type guard */
const isRoute = (path: TRouteOrDivider): path is IRoute => typeof (path as IRoute).path !== 'undefined';

export default withStyles(headerStyle)(function HeaderNoStyles(props) {
  /** creates brand of the navbar based on current route */
  function makeBrand() {
    // avoid undefined on name since this is used as child of Button which requires a child prop
    let name = '-';
    props.routes.some((prop, key) => {
      if (isRoute(prop) && props.location && prop.path === props.location.pathname) {
        name = prop.navbarName || '';
        return true;
      }
      return false;
    });
    return name;
  }

  const { classes, color } = props;
  const appBarClasses = cx({
    [' ' + classes[color]]: color
  });
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container + " header_main"}>
        <div className={classes.flex}>
          {/* Here we create navbar brand, based on route name */}
          <Button href="#" className={classes.title}>
            {makeBrand()}
          </Button>
        </div>
        <Hidden smDown={true} implementation="css">
          <HeaderLinks />
        </Hidden>
        <Hidden mdUp={true}>
          <IconButton
            className={classes.appResponsive}
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
} as React.SFC<IHeaderProps>);


