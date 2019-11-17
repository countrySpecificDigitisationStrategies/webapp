import { AuthToken, UserCredentials } from '../types'
import { ApiError, Endpoint, post } from '../api'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

interface LoginRequest {
  type: typeof LOGIN_REQUEST
  payload: UserCredentials
}
interface LoginSuccess {
  type: typeof LOGIN_SUCCESS
  token: AuthToken
}
interface LoginError {
  type: typeof LOGIN_ERROR
  error: Error
}

/** LOGIN ACTIONS **/
export const loginRequest = (userCredentials): LoginRequest => async dispatch => {
  try {
    const response = await post(Endpoint.login, userCredentials)
    dispatch(loginSuccess(response))
  } catch (e) {
    dispatch(loginError(e))
  }
}
export const loginSuccess = ({ token }: { token: AuthToken }): LoginSuccess => ({
  type: LOGIN_SUCCESS,
  token,
})
export const loginError = (error: ApiError): LoginError => ({
  type: LOGIN_ERROR,
  error,
})
