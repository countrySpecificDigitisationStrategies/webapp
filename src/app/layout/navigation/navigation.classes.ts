import { createStyles, makeStyles, Theme } from '@material-ui/core'

import { NAVIGATION_WIDTH } from '../classes.variables'

export const navigationStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: NAVIGATION_WIDTH,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      [theme.breakpoints.up('sm')]: {
        width: NAVIGATION_WIDTH,
        flexShrink: 0,
      },
    },
    drawerOpen: {
      width: NAVIGATION_WIDTH,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: 57,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    drawerPaper: {
      width: NAVIGATION_WIDTH,
    },
  })
)
