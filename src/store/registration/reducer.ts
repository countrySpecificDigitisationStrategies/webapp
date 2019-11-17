import { REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_ERROR } from './actions'

const initialState = {
  isLoading: false,
  isSuccess: false,
  error: null,
}

export const registration = (state: object = initialState, action: string): object => {
  switch (action.type) {
    case REGISTRATION_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        error: null,
      }
    case REGISTRATION_ERROR:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        error: action.payload,
      }
    default:
      return state
  }
}
