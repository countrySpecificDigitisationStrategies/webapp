import { Endpoint, post } from 'app/service'

import { createRequest } from 'features/requests/store'
import { showSuccess } from 'features/ui/store'

import { RegistrationRequest } from './types.api'

export const REGISTRATION_REQUEST_ID = 'registration'

export const register = (request: RegistrationRequest) =>
  createRequest({
    id: REGISTRATION_REQUEST_ID,
    request: () => post(Endpoint.register, request),
    onSuccess: [showRegistrationSuccess],
    clearAfter: true,
  })

const showRegistrationSuccess = () => showSuccess({ message: 'Successfully registered' })
