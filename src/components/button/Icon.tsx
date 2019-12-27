/*
 * Created on Sun Dec 23 2018
 *
 * Copyright (c) 2019 Synsoft Global
 */

import * as React from 'react';

import { IconButton, withStyles } from '@material-ui/core';

import iconButtonStyle from 'src/assets/jss/material-dashboard-react/iconButtonStyle';

interface IMyIconButtonProps {
  classes: any;
  color: 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'rose' | 'white' | 'simple',
  customClass: string;
  disabled?: boolean;
}

const MyIconButton: React.SFC<IMyIconButtonProps> = ({ classes, color, children, customClass, ...rest }) => (
  <IconButton
    {...rest}
    className={classes.button + (color ? ' ' + classes[color] : '') + (customClass ? ' ' + customClass : '')}
  >
    {children}
  </IconButton>
);

export default withStyles(iconButtonStyle)(MyIconButton);
