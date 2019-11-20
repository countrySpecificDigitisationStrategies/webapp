import { AuthToken, UserCredentials } from '../types'
import { ApiError, Endpoint, post, removeAuthToken, setAuthToken } from '../api'
import { registerRequestAction } from '../middleware'

/** Login */
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

interface LoginRequest {
  type: typeof LOGIN_REQUEST
  payload: UserCredentials
}
interface LoginSuccess {
  type: typeof LOGIN_SUCCESS
}
interface LoginError {
  type: typeof LOGIN_ERROR
  error: ApiError
}

/** Login Actions */
export const login = (() => {
  const type = LOGIN_REQUEST
  registerRequestAction({
    type,
    request: action => post(Endpoint.login, action.credentials),
    onSuccess: ({ token }: { token: AuthToken }, dispatch) => {
      setAuthToken(token)
      dispatch(loginSuccess())
    },
    onError: (err, dispatch) => dispatch(loginError(err)),
  })
  return (credentials: UserCredentials): LoginRequest => ({
    type,
    credentials,
  })
})()

export const loginSuccess = (): LoginSuccess => ({
  type: LOGIN_SUCCESS,
})
export const loginError = (error: ApiError): LoginError => ({
  type: LOGIN_ERROR,
  error,
})

/** Logout */
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_ERROR = 'LOGOUT_ERROR'

interface LoginRequest {
  type: typeof LOGOUT_REQUEST
}
interface LoginSuccess {
  type: typeof LOGOUT_SUCCESS
}
interface LoginError {
  type: typeof LOGOUT_ERROR
  error: ApiError
}

/** Logout Actions */
export const logout = (() => {
  const type = LOGOUT_REQUEST
  registerRequestAction({
    type,
    request: () => post(Endpoint.logout),
    onSuccess: (data, dispatch) => {
      removeAuthToken()
      dispatch(logoutSuccess())
    },
    onError: (err, dispatch) => dispatch(loginError(err)),
  })
  return (): LogoutRequest => ({
    type,
  })
})()

export const logoutSuccess = (): LogoutSuccess => ({
  type: LOGOUT_SUCCESS,
})
export const logoutError = (error: ApiError): LogoutError => ({
  type: LOGOUT_ERROR,
  error,
})
