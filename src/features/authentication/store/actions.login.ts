import { UserCredentials } from './types'
import { Endpoints, post, AuthToken } from 'app/service'
import { createRequest } from 'features/requests/store'

/** Login */
export const LOGIN_REQUEST_ID = 'login'
export const LOGIN_SUCCESS = 'auth/login/success'

interface LoginSuccess {
  type: typeof LOGIN_SUCCESS
}

export type LoginActionTypes = LoginRequest | LoginSuccess

/** Login Actions */
export const login = (credentials: UserCredentials) =>
  createRequest({
    id: LOGIN_REQUEST_ID,
    request: () => post(Endpoints.login, credentials),
    onSuccess: loginSuccess,
  })

const loginSuccess = (token: AuthToken): LoginSuccess => ({
  type: LOGIN_SUCCESS,
  token,
})
