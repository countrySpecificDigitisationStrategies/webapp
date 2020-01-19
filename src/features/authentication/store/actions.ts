export { LOGIN_SUCCESS, login } from './actions.login'
export { LOGOUT_SUCCESS, logout } from './actions.logout'

import { LoginActionTypes } from './actions.login'
import { LogoutActionTypes } from './actions.logout'

export type AuthActionTypes = LoginActionTypes | LogoutActionTypes
