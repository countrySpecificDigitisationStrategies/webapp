export { ACCOUNT_REQUEST_ID, ACCOUNT_SET, loadAccount } from './actions.account'
export { BOARDS_REQUEST_ID, BOARDS_ADD, loadBoards } from './actions.boards'
export { USERS_ADD } from './actions.users'
export { REGISTRATION_REQUEST_ID, register } from './actions.registration'

import { AccountActions } from './actions.account'
import { BoardActions } from './actions.boards'
import { UserActions } from './actions.users'

export type UserActionTypes = AccountActions | BoardActions | UserActions
