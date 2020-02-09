export { BOARDS_REQUEST_ID, BOARDS_ADD, loadBoards, addBoardsFromResponse } from './actions.boards'
export { USERS_ADD } from './actions.users'

import { BoardActions } from './actions.boards'
import { UserActions } from './actions.users'

export type UserActionTypes = BoardActions | UserActions
