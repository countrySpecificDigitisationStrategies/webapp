export { ACCOUNT_LOAD_REQUEST_ID, ACCOUNT_SET, loadAccount, patchAccount } from './actions.account'
export { LOGIN_SUCCESS, login, LOGOUT_SUCCESS, logout } from './actions.auth'
export { REGISTRATION_REQUEST_ID, register } from './actions.registration'

import { AuthActions } from './actions.auth'
import { AccountActions } from './actions.account'

export type AccountActionTypes = AuthActions | AccountActions
