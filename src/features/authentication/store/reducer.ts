import { AuthState } from './types'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_ERROR,
  LOGOUT_SUCCESS,
  AuthActionTypes,
} from './actions'

const initialState: AuthState = {
  isLoading: false,
  isLoggedIn: false,
  error: null,
}

export const authentication = (state: AuthState = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        error: null,
      }
    case LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: null,
      }
    case LOGOUT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    default:
      return state
  }
}
