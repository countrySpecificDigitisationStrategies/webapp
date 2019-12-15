export * from './actions.navbar'
export * from './actions.error'

import { NavBarActions } from './actions.navbar'
import { ErrorActions } from './actions.error'

export type UiActionTypes = NavBarActions | ErrorActions
