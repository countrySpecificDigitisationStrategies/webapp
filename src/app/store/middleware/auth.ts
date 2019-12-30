import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from 'features/authentication/store'
import { removeAuthToken, setAuthToken } from 'app/service'

export const authHandler = () => next => action => {
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
