import * as React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

const style = {
  grid: {
    margin: '0 -15px',
    width: 'calc(100% + 30px)'
    // '&:before,&:after':{
    //   display: 'table',
    //   content: '" "',
    // },
    // '&:after':{
    //   clear: 'both',
    // }
  }
};

// doc: https://demos.creative-tim.com/material-kit-pro-react/?_ga=2.109857984.49214816.1546719710-262299143.1546719710#/documentation/grid
function GridContainer({ ...props }) {
  const { classes, children, className, ...rest } = props;
  return (
    <Grid container={true} {...rest} className={classes.grid + ' ' + className}>
      {children}
    </Grid>
  );
}

export default withStyles(style)(GridContainer);
