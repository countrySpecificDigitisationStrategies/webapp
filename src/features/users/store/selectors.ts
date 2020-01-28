import { ApplicationState } from 'app/store/reducers'
import { UsersState, User, Board } from 'features/users/store/types'
import { doesRequestExist } from 'features/requests/store'
import { ACCOUNT_REQUEST_ID, BOARDS_REQUEST_ID } from 'features/users/store/actions'

const getSlice = (state: ApplicationState): UsersState => state.users
export const getAccount = (state: ApplicationState): UsersState['account'] => getSlice(state).account

const getBoards = (state: ApplicationState): UsersState['boards'] => getSlice(state).boards
export const getBoard = (id: Board['id']) => (state: ApplicationState): Board | undefined => getBoards(state)[id]
export const getBoardsByIds = (ids: Board['id'][]) => (state: ApplicationState): Board[] => [
  ...ids.map(id => getBoards(state)[id]).filter(board => board !== undefined),
]

const getUsers = (state: ApplicationState): UsersState['users'] => getSlice(state).users
export const getUser = (id: User['id']) => (state: ApplicationState): User | undefined => getUsers(state)[id]
export const getUsersByIds = (ids: User['id'][]) => (state: ApplicationState): User[] => [
  ...ids.map(id => getUsers(state)[id]).filter(user => user !== undefined),
]

export const isAccountLoaded = doesRequestExist(ACCOUNT_REQUEST_ID)
export const areBoardsLoaded = doesRequestExist(BOARDS_REQUEST_ID)
