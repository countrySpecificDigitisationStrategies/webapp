import { Endpoint, get } from 'app/service'
import { createRequest } from 'features/requests/store'

/** Logout */
export const LOGOUT_REQUEST_ID = 'logout'
export const LOGOUT_SUCCESS = 'auth/logout/success'

interface LogoutSuccess {
  type: typeof LOGOUT_SUCCESS
}

export type LogoutActionTypes = LogoutSuccess

/** Logout Actions */
export const logout = () =>
  createRequest({
    id: LOGOUT_REQUEST_ID,
    request: () => get(Endpoint.logout),
    onSuccess: logoutSuccess,
  })

const logoutSuccess = (): LogoutSuccess => ({
  type: LOGOUT_SUCCESS,
})
