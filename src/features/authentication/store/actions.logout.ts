import { ApiError, Endpoints, get, removeAuthToken } from 'app/service'
import { registerRequestAction } from 'app/store/middleware'

/** Logout */
export const LOGOUT_REQUEST = 'auth/logout/request'
export const LOGOUT_SUCCESS = 'auth/logout/success'
export const LOGOUT_ERROR = 'auth/logout/error'

interface LogoutRequest {
  type: typeof LOGOUT_REQUEST
}
interface LogoutSuccess {
  type: typeof LOGOUT_SUCCESS
}
interface LogoutError {
  type: typeof LOGOUT_ERROR
  error: ApiError
}

export type LogoutActionTypes = LogoutRequest | LogoutSuccess | LogoutError

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
    onError: (err, dispatch) => dispatch(logoutError(err)),
  })
  return (): LogoutRequest => ({
    type,
  })
})()

const logoutSuccess = (): LogoutSuccess => ({
  type: LOGOUT_SUCCESS,
})
const logoutError = (error: ApiError): LogoutError => ({
  type: LOGOUT_ERROR,
  error,
})
