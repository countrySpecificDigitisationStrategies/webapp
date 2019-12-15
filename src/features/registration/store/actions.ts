import { UserData } from './types'
import { Endpoints, post } from 'app/service'
import { createRequest } from 'features/requests/store'

export const REGISTRATION_REQUEST_ID = 'registration'
export const REGISTRATION_SUCCESS = 'registration/success'

interface RegistrationSuccess {
  type: typeof REGISTRATION_SUCCESS
}

export type RegistrationAction = RegistrationRequest | RegistrationSuccess

/** Registration Actions */
export const register = (user: UserData) =>
  createRequest({
    id: REGISTRATION_REQUEST_ID,
    request: () => post(Endpoints.register, user),
    onSuccess: registrationSuccess,
  })

const registrationSuccess = (): RegistrationSuccess => ({
  type: REGISTRATION_SUCCESS,
})
