import { makeStyles, Theme } from '@material-ui/core'
import { amber, green } from '@material-ui/core/colors'
import { NotificationType } from 'shared/components/Notification/Notification'

export const notificationStyles = makeStyles((theme: Theme) => {
  return {
    [NotificationType.success]: { backgroundColor: green[600] },
    [NotificationType.warning]: { backgroundColor: amber[700] },
    [NotificationType.error]: { backgroundColor: theme.palette.error.dark },
    [NotificationType.info]: { backgroundColor: theme.palette.primary.main },
    typeIcon: {
      opacity: 0.9,
      marginRight: theme.spacing(1),
    },
    icon: {
      fontSize: 20,
    },
    message: {
      display: 'flex',
      alignItems: 'center',
    },
  }
})
