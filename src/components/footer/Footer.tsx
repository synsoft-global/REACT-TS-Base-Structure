/*
 * Created on Sun Dec 23 2018
 *
 * Copyright (c) 2019 Synsoft Global
 */

import * as React from "react";
import { List, ListItem, withStyles } from "@material-ui/core";
import styles from "src/assets/jss/material-dashboard-react/footerStyle";

const css = {
  position: "fixed" as "fixed",
  bottom: 0,
  background: "#fff",
  width: "calc(100% - 290px)"
};

function Footer({ ...props }) {
  const { classes } = props;
  return (
    <footer style={css} className={classes.footer + " footer_bottom"}>
      <div className={classes.container + " fotter_flex"}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="#home" className={classes.block}>
                Home
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#company" className={classes.block}>
                Company
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#portfolio" className={classes.block}>
                Portfolio
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#blog" className={classes.block}>
                Blog
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {new Date().getFullYear()}{" "}
            <a href="https://www.sophatar.com" className={classes.a}>
              Synsoft Global.
            </a>, Personalized Displays that Know You!
          </span>
        </p>
      </div>
    </footer>
  );
}

export default withStyles(styles)(Footer);
