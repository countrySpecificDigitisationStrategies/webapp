export { CLOSE_NAV_BAR, OPEN_NAV_BAR, closeNavBar, openNavBar } from './actions.navbar'
export { HIDE_NOTIFICATION, SHOW_NOTIFICATION, showError, showSuccess, hideNotification } from './actions.notification'

import { NavBarActions } from './actions.navbar'
import { NotificationActions } from './actions.notification'

export type UiActionTypes = NavBarActions | NotificationActions
