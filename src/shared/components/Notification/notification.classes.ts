import { makeStyles, Theme } from '@material-ui/core'
import { amber, green } from '@material-ui/core/colors'
import { NotificationType } from 'shared/components/Notification/Notification'

const getColors = (theme: Theme): { [type: NotificationType]: string } => ({
  [NotificationType.success]: green[600],
  [NotificationType.warning]: amber[700],
  [NotificationType.error]: theme.palette.error.dark,
  [NotificationType.info]: theme.palette.primary.main,
})

export const notificationStyles = makeStyles((theme: Theme) => {
  const colors = getColors(theme)
  return {
    ...Object.keys(colors).reduce((acc, type) => {
      acc[type] = { backgroundColor: colors[type] }
      return acc
    }, {}),
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
