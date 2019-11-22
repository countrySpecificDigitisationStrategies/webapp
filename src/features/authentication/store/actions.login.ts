import { AuthToken, UserCredentials } from './types'
import { registerRequestAction } from '../../../store/middleware'
import { ApiError, Endpoints, post, setAuthToken } from '../../../service'

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

export type LoginActionTypes = LoginRequest | LoginSuccess | LoginError

/** Login Actions */
export const login = (() => {
  const type = LOGIN_REQUEST
  registerRequestAction({
    type,
    request: action => post(Endpoints.login, action.credentials),
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

const loginSuccess = (): LoginSuccess => ({
  type: LOGIN_SUCCESS,
})
const loginError = (error: ApiError): LoginError => ({
  type: LOGIN_ERROR,
  error,
})
