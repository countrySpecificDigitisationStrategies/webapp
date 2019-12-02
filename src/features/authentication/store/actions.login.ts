import { UserCredentials } from './types'
import { registerRequestAction } from 'app/store/middleware'
import { Endpoints, post, setAuthToken, AuthToken } from 'app/service'

/** Login */
export const LOGIN_REQUEST = 'auth/login/request'
export const LOGIN_SUCCESS = 'auth/login/success'

interface LoginRequest {
  type: typeof LOGIN_REQUEST
  payload: UserCredentials
}
interface LoginSuccess {
  type: typeof LOGIN_SUCCESS
}

export type LoginActionTypes = LoginRequest | LoginSuccess

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
  })
  return (credentials: UserCredentials): LoginRequest => ({
    type,
    credentials,
  })
})()

const loginSuccess = (): LoginSuccess => ({
  type: LOGIN_SUCCESS,
})
