import { getRequestType, REQUEST_ERROR, REQUEST_START, REQUEST_SUCCESS, RequestAction } from './actions'
import { loadingState, RequestState } from './types'

const initialState: RequestState = {}

export const requests = (state: RequestState = initialState, action: RequestAction): RequestState => {
  const requestType = getRequestType(action.type)
  switch (requestType) {
    case REQUEST_START:
      return {
        ...state,
        [action.id]: loadingState.pending,
      }
    case REQUEST_SUCCESS:
      return {
        ...state,
        [action.id]: loadingState.done,
      }
    case REQUEST_ERROR:
      return {
        ...state,
        [action.id]: loadingState.failed,
      }
    default:
      return state
  }
}
