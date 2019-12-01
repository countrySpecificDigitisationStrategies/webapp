import { REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_ERROR, RegistrationAction } from './actions'
import { RegistrationState } from './types'

const initialState: RegistrationState = {
  isSuccess: false,
  error: null,
}

export const registration = (
  state: RegistrationState = initialState,
  action: RegistrationAction
): RegistrationState => {
  switch (action.type) {
    case REGISTRATION_REQUEST:
      return {
        ...state,
      }
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        error: null,
      }
    case REGISTRATION_ERROR:
      return {
        ...state,
        isSuccess: false,
        error: action.payload,
      }
    default:
      return state
  }
}
