/*
 * Created on Sun Dec 23 2018
 *
 * Copyright (c) 2019 Synsoft Global
 */

import * as React from 'react';

import { Drawer, Hidden, List, ListItem, ListItemIcon, ListItemText, Tooltip, withStyles } from '@material-ui/core';
import { TRoutes, isRouteDivider } from 'src/routes';

import HeaderLinks from 'src/components/header/HeaderLinks';
import { NavLink } from 'react-router-dom';
import { WithStyles } from '@material-ui/core/styles';
import cx from 'classnames';
import styles from 'src/assets/jss/material-dashboard-react/sidebarStyle';

interface ISidebarProps extends WithStyles<typeof styles> {
  color: any;
  handleDrawerToggle: any;
  image: any;
  /** added by react router */
  location?: {
    pathname: string;
  };
  /** url of logo image */
  logo: any;
  // logoText: string;
  open: any;
  routes: TRoutes;
}

export default withStyles(styles)((props => {

  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName: string) {
    // return props.location.pathname.indexOf(routeName) > -1 ? true : false; // EDITBDC180705: this matches for both /table/<route>  and /<route>
    return props.location && props.location.pathname.startsWith(routeName);
  }

  const { classes, color, logo, image,/* logoText,*/ routes } = props;
  const links = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        if (isRouteDivider(prop)) {
          return <hr key={key} />;
        }

        // if (prop.redirect) {
        //   return null;
        // }

        const listItemClasses = cx({
          [' ' + classes[color]]: activeRoute(prop.path)
        });
        const whiteFontClasses = cx({
          [' ' + classes.whiteFont]: activeRoute(prop.path)
        });
        return (
          <NavLink to={prop.path} className={classes.item} activeClassName="active" key={key}>
            <Tooltip id="tooltip_id" title="tooltip placeholder">
              <ListItem button={true} className={classes.itemLink + listItemClasses}>
                {prop.icon && (
                  <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
                    <prop.icon />
                  </ListItemIcon>
                )}
                <ListItemText
                  primary={prop.sidebarName}
                  className={classes.itemText + whiteFontClasses}
                  disableTypography={true}
                />
              </ListItem>
            </Tooltip>
          </NavLink>
        );
      })}
    </List>
  );
  const brand = (
    <div className={classes.logo}>
      <a href="https://www.sophatar.com" className={classes.logoLink}>
        <div className={classes.logoImage}>
          <img src={logo} alt="logo" className={classes.img} />
        </div>
        {/* {logoText} */}
      </a>
    </div>
  );
  return (
    <div>
      <Hidden mdUp={true}>
        <Drawer
          variant="temporary"
          anchor="right"
          open={props.open}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            <HeaderLinks />
            {links}
          </div>
          {image !== undefined ? (
            <div className={classes.background} style={{ backgroundImage: 'url(' + image + ')' }} />
          ) : null}
        </Drawer>
      </Hidden>
      <Hidden smDown={true}>
        <Drawer
          anchor="left"
          variant="permanent"
          open={true}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
          {image !== undefined ? (
            <div className={classes.background} style={{ backgroundImage: 'url(' + image + ')' }} />
          ) : null}
        </Drawer>
      </Hidden>
    </div>
  );
}) as React.SFC<ISidebarProps>);

