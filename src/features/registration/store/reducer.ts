import { REGISTRATION_REQUEST, REGISTRATION_SUCCESS, RegistrationAction } from './actions'
import { RegistrationState } from './types'

const initialState: RegistrationState = {
  isSuccess: false,
}

export const registration = (
  state: RegistrationState = initialState,
  action: RegistrationAction
): RegistrationState => {
  switch (action.type) {
    case REGISTRATION_REQUEST:
      return {
        ...state,
        isSuccess: false,
      }
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        isSuccess: true,
      }
    default:
      return state
  }
}
