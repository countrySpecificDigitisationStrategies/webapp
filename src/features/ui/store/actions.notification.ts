import { Notification } from './types'
import { NotificationType } from 'shared/components'

export const SHOW_NOTIFICATION = 'ui/notification/show'
export const HIDE_NOTIFICATION = 'ui/notification/hide'

interface ShowNotification {
  type: typeof SHOW_NOTIFICATION
  payload: Notification
}

interface HideNotification {
  type: typeof HIDE_NOTIFICATION
}

export type NotificationActions = ShowNotification | HideNotification

export const showError = (props: Omit<Notification, 'type'>) =>
  showNotification({ ...props, type: NotificationType.error })

export const showSuccess = (props: Omit<Notification, 'type'>) =>
  showNotification({ ...props, type: NotificationType.success })

const showNotification = ({ title, message, type }: Notification): ShowNotification => ({
  type: SHOW_NOTIFICATION,
  payload: { title, message, type },
})

export const hideNotification = (): HideNotification => ({
  type: HIDE_NOTIFICATION,
})
