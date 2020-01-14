import React from 'react'

import { IconButton, SnackbarContent } from '@material-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'
import { notificationStyles } from './notification.classes'
import { icons } from './notification.icons'
import { NotificationType } from './notification.types'

export interface NotificationProps {
  type: NotificationType
  message: string
  onClose?: () => void
}

const Notification = ({ type, message, onClose }: NotificationProps) => {
  const cls = notificationStyles()
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

export { Notification, NotificationType }
