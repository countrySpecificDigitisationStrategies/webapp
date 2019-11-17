import { UserData } from '../types'
import { ApiError, Endpoint, post } from '../api'

export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST'
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS'
export const REGISTRATION_ERROR = 'REGISTRATION_ERROR'

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
