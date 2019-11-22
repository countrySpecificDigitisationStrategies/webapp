import { ApiError, Endpoints, post, removeAuthToken } from '../../../service'
import { registerRequestAction } from '../../../store/middleware'

/** Logout */
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_ERROR = 'LOGOUT_ERROR'

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
    request: () => post(Endpoints.logout),
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
