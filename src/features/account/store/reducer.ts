import { AccountState } from './types'
import { LOGIN_SUCCESS, LOGOUT_SUCCESS, ACCOUNT_SET, AccountActionTypes } from './actions'
import { getStoredAuthToken } from 'features/account/store/middleware'

const initialState: AccountState = {
  account: null,
  token: getStoredAuthToken(),
}

export const accountReducer = (state: AccountState = initialState, action: AccountActionTypes): AccountState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
      }
    case LOGOUT_SUCCESS:
      return {
        account: null,
        token: null,
      }
    case ACCOUNT_SET:
      return {
        ...state,
        account: action.payload,
      }
    default:
      return state
  }
}
