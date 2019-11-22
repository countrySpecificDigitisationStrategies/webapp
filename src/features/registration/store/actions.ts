import { UserData } from './types'
import { ApiError, Endpoints, post } from '../../../service'
import { registerRequestAction } from '../../../store/middleware'

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

export type RegistrationAction = RegistrationRequest | RegistrationSuccess | RegistrationError

/** Registration Actions */
export const register = (() => {
  const type = REGISTRATION_REQUEST
  registerRequestAction({
    type,
    request: action => post(Endpoints.register, action.user),
    onSuccess: (data, dispatch) => dispatch(registrationSuccess()),
    onError: (err, dispatch) => dispatch(registrationError(err)),
  })
  return (user: UserData): RegistrationRequest => ({
    type,
    user,
  })
})()

const registrationSuccess = (): RegistrationSuccess => ({
  type: REGISTRATION_SUCCESS,
})
const registrationError = (error: ApiError): RegistrationError => ({
  type: REGISTRATION_ERROR,
  payload: error,
})
