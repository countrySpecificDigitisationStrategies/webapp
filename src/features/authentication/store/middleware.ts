import { Middleware } from 'redux'
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from './actions'
import { removeAuthToken, setAuthToken } from 'app/service'

export const authHandler: Middleware = () => next => action => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      setAuthToken(action.token)
      break
    case LOGOUT_SUCCESS:
      removeAuthToken()
      break
  }
  next(action)
}
