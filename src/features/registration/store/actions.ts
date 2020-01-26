import { UserData } from './types'
import { Endpoint, post } from 'app/service'
import { createRequest } from 'features/requests/store'

export const REGISTRATION_REQUEST_ID = 'registration'
export const REGISTRATION_SUCCESS = 'registration/success'

interface RegistrationSuccess {
  type: typeof REGISTRATION_SUCCESS
}

export type RegistrationAction = RegistrationSuccess

/** Registration Actions */
export const register = (user: UserData) =>
  createRequest({
    id: REGISTRATION_REQUEST_ID,
    request: () => post(Endpoint.register, user),
    onSuccess: registrationSuccess,
  })

const registrationSuccess = (): RegistrationSuccess => ({
  type: REGISTRATION_SUCCESS,
})
