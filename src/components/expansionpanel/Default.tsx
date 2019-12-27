/*
 * Created on Sun Dec 23 2018
 *
 * Copyright (c) 2019 Synsoft Global
 */

import * as React from 'react';

import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  WithStyles
} from '@material-ui/core';
import { Theme, createStyles, withStyles } from '@material-ui/core/styles';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%'
    },
    summary: {
      fontSize: theme.typography.pxToRem(18),
      fontWeight: theme.typography.fontWeightRegular,
      backgroundColor: theme.palette.primary.light
    },
    details: {
      // backgroundColor: theme.palette.secondary.light
    }
  });

interface IDefaultExpansionPanelProps extends WithStyles<typeof styles> {
  /** if true, then expansion panel will be open upon first render */
  defaultExpanded: boolean;
  /** if true, then expansion panel will be disabled */
  disabled?: boolean;
  /** title of expansion panel */
  title: string;
}

export default withStyles(styles)((props => {
  const { classes, children, defaultExpanded, disabled, title } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel defaultExpanded={defaultExpanded}>
        <ExpansionPanelSummary className={classes.summary} disabled={disabled} expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.summary}>{title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>{children}</ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}) as React.SFC<IDefaultExpansionPanelProps>);
