import { UserData } from './types'
import { Endpoints, post } from 'app/service'
import { registerRequestAction } from 'app/store/middleware'

export const REGISTRATION_REQUEST = 'registration/request'
export const REGISTRATION_SUCCESS = 'registration/success'

interface RegistrationRequest {
  type: typeof REGISTRATION_REQUEST
  payload: UserData
}

interface RegistrationSuccess {
  type: typeof REGISTRATION_SUCCESS
}

export type RegistrationAction = RegistrationRequest | RegistrationSuccess

/** Registration Actions */
export const register = (() => {
  const type = REGISTRATION_REQUEST
  registerRequestAction({
    type,
    request: action => post(Endpoints.register, action.user),
    onSuccess: (data, dispatch) => dispatch(registrationSuccess()),
  })
  return (user: UserData): RegistrationRequest => ({
    type,
    user,
  })
})()

const registrationSuccess = (): RegistrationSuccess => ({
  type: REGISTRATION_SUCCESS,
})
