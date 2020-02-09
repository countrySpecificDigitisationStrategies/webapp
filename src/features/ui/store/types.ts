import { NotificationType } from 'shared/components'

export interface UiState {
  isNavBarOpen: boolean
  notification: null | Notification
}

export interface Notification {
  type: NotificationType
  title?: string
  message: string
}
