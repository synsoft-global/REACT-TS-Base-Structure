import { Theme, createStyles } from '@material-ui/core';

const panelStyle = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      // backgroundColor: theme.palette.primary.light
      backgroundColor: theme.palette.secondary.main
    },
    // heading: {
    //   fontSize: theme.typography.pxToRem(15),
    //   fontWeight: theme.typography.fontWeightRegular
    // },
    // formControl: {
    //   margin: theme.spacing.unit,
    //   minWidth: 120
    // }
  });

export default panelStyle;
