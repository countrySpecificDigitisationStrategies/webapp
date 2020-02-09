import { UserCredentials } from './types'
import { Endpoint, post, get } from 'app/service'
import { showSuccess } from 'features/ui'
import { createRequest } from 'features/requests'
import { LoginSuccessResponse, AuthToken } from 'features/account/store/types.api'
import { clearLoadAccountRequest } from 'features/account/store/actions.account'

export const LOGIN_REQUEST_ID = 'login'
export const LOGOUT_REQUEST_ID = 'logout'

export const LOGIN_SUCCESS = 'auth/login/success'
export const LOGOUT_SUCCESS = 'auth/logout/success'

interface LoginSuccess {
  type: typeof LOGIN_SUCCESS
  token: AuthToken
}

interface LogoutSuccess {
  type: typeof LOGOUT_SUCCESS
}

export type AuthActions = LoginSuccess | LogoutSuccess

/** Login Actions */
export const login = (credentials: UserCredentials) =>
  createRequest<LoginSuccessResponse>({
    id: LOGIN_REQUEST_ID,
    request: () => post(Endpoint.login, credentials),
    onSuccess: [loginSuccess, showLoginSuccess],
  })

const loginSuccess = ({ token }: LoginSuccessResponse): LoginSuccess => ({
  type: LOGIN_SUCCESS,
  token,
})

const showLoginSuccess = () => showSuccess({ message: 'Successfully logged in' })

/** Logout Actions */
export const logout = () =>
  createRequest({
    id: LOGOUT_REQUEST_ID,
    request: () => get(Endpoint.logout),
    onSuccess: [logoutSuccess, clearLoadAccountRequest],
  })

const logoutSuccess = (): LogoutSuccess => ({
  type: LOGOUT_SUCCESS,
})
