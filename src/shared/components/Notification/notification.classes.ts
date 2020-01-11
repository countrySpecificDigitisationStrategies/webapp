import { makeStyles, Theme } from '@material-ui/core'
import { amber, green } from '@material-ui/core/colors'
import { NotificationType } from 'shared/components/Notification/Notification'

type ColorMap<T> = { [type in NotificationType]: T }

const getColors = (theme: Theme): ColorMap<string> => ({
  [NotificationType.success]: green[600],
  [NotificationType.warning]: amber[700],
  [NotificationType.error]: theme.palette.error.dark,
  [NotificationType.info]: theme.palette.primary.main,
})

export const notificationStyles = makeStyles((theme: Theme) => {
  const colors = getColors(theme)
  const notificationClasses = (Object.keys(colors) as NotificationType[]).reduce<ColorMap<object>>(
    (acc, type: NotificationType) => {
      acc[type] = { backgroundColor: colors[type] }
      return acc
    },
    {} as ColorMap<object>
  )

  return {
    ...(notificationClasses as { [notificationType: string]: object }),
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
