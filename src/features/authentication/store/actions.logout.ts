import { Endpoints, get, removeAuthToken } from 'app/service'
import { registerRequestAction } from 'app/store/middleware'

/** Logout */
export const LOGOUT_REQUEST = 'auth/logout/request'
export const LOGOUT_SUCCESS = 'auth/logout/success'

interface LogoutRequest {
  type: typeof LOGOUT_REQUEST
}
interface LogoutSuccess {
  type: typeof LOGOUT_SUCCESS
}

export type LogoutActionTypes = LogoutRequest | LogoutSuccess

/** Logout Actions */
export const logout = (() => {
  const type = LOGOUT_REQUEST
  registerRequestAction({
    type,
    request: () => get(Endpoints.logout),
    onSuccess: (data, dispatch) => {
      removeAuthToken()
      dispatch(logoutSuccess())
    },
  })
  return (): LogoutRequest => ({
    type,
  })
})()

const logoutSuccess = (): LogoutSuccess => ({
  type: LOGOUT_SUCCESS,
})
