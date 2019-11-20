import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_REQUEST, LOGOUT_ERROR, LOGOUT_SUCCESS } from './actions'

const initialState = {
  isLoading: false,
  token: null,
  error: null,
}

export const authentication = (state: object = initialState, action: string): object => {
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
