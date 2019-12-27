import * as React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

const style = {
  grid: {
    padding: "0 15px !important"
  }
};

// doc: https://demos.creative-tim.com/material-kit-pro-react/?_ga=2.109857984.49214816.1546719710-262299143.1546719710#/documentation/grid
function GridItem({ ...props }) {
  const { classes, children, className, ...rest } = props;
  return (
    <Grid item={true} {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

export default withStyles(style)(GridItem);
