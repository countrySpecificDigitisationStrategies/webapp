export * from './actions.navbar'
export * from './actions.error'
export * from './actions.loading'

import { NavBarActions } from './actions.navbar'
import { ErrorActions } from './actions.error'
import { LoadingAction } from './actions.loading'

export type UiActionTypes = NavBarActions | ErrorActions | LoadingAction
