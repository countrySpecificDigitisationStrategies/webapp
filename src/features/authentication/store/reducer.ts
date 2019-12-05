import { isAuthTokenValid } from 'app/service/authentication'
import { AuthState } from './types'
import { LOGIN_SUCCESS, LOGOUT_SUCCESS, AuthActionTypes } from './actions'

const initialState: AuthState = {
  isLoggedIn: isAuthTokenValid(),
}

export const authentication = (state: AuthState = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      }
    default:
      return state
  }
}
