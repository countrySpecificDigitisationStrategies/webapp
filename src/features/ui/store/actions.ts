export { CLOSE_NAV_BAR, OPEN_NAV_BAR, closeNavBar, openNavBar } from './actions.navbar'
export { HIDE_ERROR, SHOW_ERROR, showError, hideError } from './actions.error'

import { NavBarActions } from './actions.navbar'
import { ErrorActions } from './actions.error'

export type UiActionTypes = NavBarActions | ErrorActions
