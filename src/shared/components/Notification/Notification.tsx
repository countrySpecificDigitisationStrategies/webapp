import React from 'react'

import { IconButton, makeStyles, SnackbarContent, Theme } from '@material-ui/core'
import { amber, green } from '@material-ui/core/colors'
import {
  CheckCircle as CheckCircleIcon,
  Info as InfoIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
  Close as CloseIcon,
} from '@material-ui/icons'

export interface NotificationProps {
  type: NotificationType
  message: string
  onClose?: () => void
}

export enum NotificationType {
  warning = 'warning',
  error = 'error',
  info = 'info',
  success = 'success',
}

const icons: { [type: NotificationType]: JSXElement } = {
  [NotificationType.success]: CheckCircleIcon,
  [NotificationType.warning]: WarningIcon,
  [NotificationType.error]: ErrorIcon,
  [NotificationType.info]: InfoIcon,
}

const getColors = (theme: Theme): { [type: NotificationType]: string } => ({
  [NotificationType.success]: green[600],
  [NotificationType.warning]: amber[700],
  [NotificationType.error]: theme.palette.error.dark,
  [NotificationType.info]: theme.palette.primary.main,
})

const useStyles = makeStyles((theme: Theme) => {
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

export const Notification = ({ type, message, onClose }: NotificationProps) => {
  const cls = useStyles()
  const Icon = icons[type]
  return (
    <SnackbarContent
      className={cls[type]}
      message={
        <span className={cls.message}>
          <Icon className={`${cls.icon} ${cls.typeIcon}`} />
          {message}
        </span>
      }
      action={[
        <IconButton key="close" color="inherit" onClick={onClose}>
          <CloseIcon className={cls.icon} />
        </IconButton>,
      ]}
    />
  )
}
