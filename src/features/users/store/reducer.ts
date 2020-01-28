import { UsersState } from 'features/users/store/types'
import { UserActionTypes, USERS_ADD, ACCOUNT_SET, BOARDS_ADD } from 'features/users/store/actions'
import { toIndexedObject } from 'shared/utils'

const initialState: UsersState = {
  account: {},
  boards: {},
  users: {},
}

export const usersReducer = (state: UsersState = initialState, action: UserActionTypes): UsersState => {
  switch (action.type) {
    case ACCOUNT_SET:
      return {
        ...state,
        account: action.payload,
      }
    case BOARDS_ADD:
      return {
        ...state,
        boards: {
          ...state.boards,
          ...toIndexedObject(action.payload, 'id'),
        },
      }
    case USERS_ADD:
      return {
        ...state,
        users: {
          ...state.users,
          ...toIndexedObject(action.payload, 'id'),
        },
      }
    default:
      return state
  }
}
