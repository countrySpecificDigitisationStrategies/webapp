import { createStyles, makeStyles, Theme } from '@material-ui/core'
import { NAVIGATION_WIDTH } from '../classes.variables'

export const toolBarStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      [theme.breakpoints.up('sm')]: {
        marginLeft: NAVIGATION_WIDTH,
        width: `calc(100% - ${NAVIGATION_WIDTH}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
    menuButton: {
      marginRight: 16,
    },
    hide: {
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
  })
)
