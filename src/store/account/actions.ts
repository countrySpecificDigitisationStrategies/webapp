import { UserCredentials, UserData } from './types'
import { ApiError, Endpoint, post } from '../api'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST'
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS'
export const REGISTRATION_ERROR = 'REGISTRATION_ERROR'

interface LoginRequest {
  type: typeof LOGIN_REQUEST
  payload: UserCredentials
}
interface LoginSuccess {
  type: typeof LOGIN_SUCCESS
  payload: UserData
}
interface LoginError {
  type: typeof LOGIN_ERROR
  payload: Error
}

interface RegistrationRequest {
  type: typeof REGISTRATION_REQUEST
  payload: UserData
}
interface RegistrationSuccess {
  type: typeof REGISTRATION_SUCCESS
}
interface RegistrationError {
  type: typeof REGISTRATION_ERROR
  payload: Error
}

/** LOGIN ACTIONS **/
export const loginRequest = (userCredentials: UserCredentials): LoginRequest => ({
  type: LOGIN_REQUEST,
  payload: userCredentials,
})
export const loginSuccess = (userData: UserData): LoginSuccess => ({
  type: LOGIN_SUCCESS,
  payload: userData,
})
export const loginError = (error: Error): LoginError => ({
  type: LOGIN_ERROR,
  payload: error,
})

/** SIGN-UP ACTIONS **/
export const registrationRequest = (userCredentials): RegistrationRequest => async dispatch => {
  try {
    const response = await post(Endpoint.register, userCredentials)
    dispatch(registrationSuccess(response))
  } catch (e) {
    dispatch(registrationError(e))
  }
}

const registrationSuccess = (): RegistrationSuccess => ({
  type: REGISTRATION_SUCCESS,
})
const registrationError = (error: ApiError): RegistrationError => ({
  type: REGISTRATION_ERROR,
  payload: error,
})
