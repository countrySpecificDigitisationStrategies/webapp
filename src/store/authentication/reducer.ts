import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_CLEAR } from './actions'

const initialState = {
  isLoading: false,
  token: null,
  error: null,
}

export const authentication = (state: object = initialState, action: string): object => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.token,
        error: null,
      }
    case LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        token: null,
        error: action.error,
      }
    case LOGIN_CLEAR:
      return {
        isLoading: false,
        token: null,
        error: null,
      }
    default:
      return state
  }
}
