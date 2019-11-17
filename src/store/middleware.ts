import { LOGIN_SUCCESS } from './authentication/actions'
import { setAuthToken } from './api'

export const saveAuthToken = store => next => action => {
  if (action.type === LOGIN_SUCCESS) {
    setAuthToken(action.token)
  }

  return next(action)
}
