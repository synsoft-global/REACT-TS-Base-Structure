/*
 * Created on Sun Nov 10 2019
 *
 * Copyright (c) 2019 Synsoft Global
 */

import { Theme, createStyles } from '@material-ui/core';

import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core';
import GridContainer from 'src/components/grid/GridContainer';
import GridItem from 'src/components/grid/GridItem';
import Button from 'src/components/custombuttons/Button';
import Card from 'src/components/card/Card';
import CardBody from 'src/components/card/CardBody';

import { NavLink } from 'react-router-dom';

import homeStyle from 'src/assets/jss/material-dashboard-pro-react/layouts/homeStyle';
import cardImagesStyles from 'src/assets/jss/material-dashboard-pro-react/cardImagesStyles';

const styles = (theme: Theme) =>
  createStyles({
    ...homeStyle(theme),
    ...cardImagesStyles,
    textWhite: {
      '&, & *': {
        color: '#FFF'
      }
    },
    root: {
      flexGrow: 1
    }
  });

interface IHomeLayoutProps extends WithStyles<typeof styles> { }

export default withStyles(styles)(
  class HomeLayout extends React.Component<IHomeLayoutProps> {
    public render() {
      const { classes } = this.props;
      return (
        <div className={classes.wrapper}>
          <div className={classes.fullPage}>
            <GridContainer className={classes.root} alignItems='center' alignContent='center' justify='center'>
              <GridItem>
                <Card style={{ width: '20rem' }}>
                  <img
                    className={classes.cardImgTop}
                    data-src='holder.js/100px180/'
                    alt='100%x180'
                    style={{ height: '180px', width: '100%', display: 'block' }}
                    // TODO: replace image
                    src='data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_163df23d717%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_163df23d717%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.35%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
                    data-holder-rendered='true'
                  />
                  <CardBody>
                    <h5>
                      <em>ProxiScreen Proximity Signage</em> turns a smartphone into a remote control for digital
                      signage displays{' '}
                    </h5>
                    <NavLink to='/signage'>
                      <Button color='primary' fullWidth={true}>
                        Launch ProxiScreen Console
                      </Button>
                    </NavLink>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem>
                <Card style={{ width: '20rem' }}>
                  <img
                    className={classes.cardImgTop}
                    data-src='holder.js/100px180/'
                    alt='100%x180'
                    style={{ height: '180px', width: '100%', display: 'block' }}
                    // TODO: replace image
                    src='data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_163df23d717%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_163df23d717%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.35%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
                    data-holder-rendered='true'
                  />
                  <CardBody>
                    <h5>
                      <em>Mobile Wallet Passes</em> push content to phones without mobile app. Use it for coupons,
                      promotions & loyalty.{' '}
                    </h5>
                    <NavLink to='/passes'>
                      <Button color='primary' fullWidth={true}>
                        Launch WalletPass Console
                      </Button>
                    </NavLink>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      );
    }
  }
);
