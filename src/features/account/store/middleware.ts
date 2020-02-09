import { Middleware } from 'redux'
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from './actions'
import { AuthToken } from './types.api'

const AUTH_TOKEN_STORAGE_KEY = 'token'

export const getStoredAuthToken = (): AuthToken | null => window.localStorage.getItem(AUTH_TOKEN_STORAGE_KEY)

export const authHandler: Middleware = () => next => action => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      window.localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, action.token)
      break
    case LOGOUT_SUCCESS:
      window.localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY)
      break
  }
  next(action)
}
