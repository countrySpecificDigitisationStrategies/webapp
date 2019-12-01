import { isAuthTokenValid } from 'app/service/authentication'
import { AuthState } from './types'
import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_ERROR, LOGOUT_SUCCESS, AuthActionTypes } from './actions'

const initialState: AuthState = {
  isLoggedIn: isAuthTokenValid(),
  error: null,
}

export const authentication = (state: AuthState = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        error: null,
      }
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.error,
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        error: null,
      }
    case LOGOUT_ERROR:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}
