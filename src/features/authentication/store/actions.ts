export * from './actions.login'
export * from './actions.logout'

import { LoginActionTypes } from './actions.login'
import { LogoutActionTypes } from './actions.logout'

export type AuthActionTypes = LoginActionTypes | LogoutActionTypes
