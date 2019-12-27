/*
 * Created on Sun Dec 23 2018
 *
 * Copyright (c) 2019 Synsoft Global
 */

import * as React from 'react';

import { Theme, createStyles, withStyles } from '@material-ui/core/styles';

import { CircularProgress } from '@material-ui/core';
import { WithStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  progress: {
    margin: theme.spacing.unit * 2
  },
  mySpinner: {
    position: 'absolute',
    paddingTop: '15%',
    width: '100%',
    height: '100%',
    zIndex: 1000,
    backgroundColor: '#000000',
    opacity: 0.5,
    textAlign: 'center'
  }
});

interface ICircularProgressProps extends WithStyles<typeof styles> {

}

export default withStyles(styles)((
  ({ classes }) => (
    <div className={classes.mySpinner}>
      <CircularProgress className={classes.progress} size={50} />
    </div>
  )) as React.SFC<ICircularProgressProps>)
