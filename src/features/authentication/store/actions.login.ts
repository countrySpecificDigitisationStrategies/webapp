import { UserCredentials } from './types'
import { Endpoint, post, AuthToken } from 'app/service'
import { createRequest } from 'features/requests/store'

/** Login */
export const LOGIN_REQUEST_ID = 'login'
export const LOGIN_SUCCESS = 'auth/login/success'

interface LoginSuccess {
  type: typeof LOGIN_SUCCESS
  token: AuthToken
}

interface LoginSuccessPayload {
  token: AuthToken
}

export type LoginActionTypes = LoginSuccess

/** Login Actions */
export const login = (credentials: UserCredentials) =>
  createRequest<LoginSuccessPayload>({
    id: LOGIN_REQUEST_ID,
    request: () => post(Endpoint.login, credentials),
    onSuccess: loginSuccess,
  })

const loginSuccess = ({ token }: LoginSuccessPayload): LoginSuccess => ({
  type: LOGIN_SUCCESS,
  token,
})
