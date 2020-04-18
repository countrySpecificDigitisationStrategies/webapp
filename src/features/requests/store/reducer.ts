import { getRequestType, REQUEST_CLEAR, REQUEST_ERROR, REQUEST_START, REQUEST_SUCCESS, RequestAction } from './actions'
import { loadingState, RequestState } from './types'

const initialState: RequestState = {}

export const requests = (state: RequestState = initialState, action: RequestAction): RequestState => {
  const requestType = getRequestType(action.type)
  const currentRequestState = state[action.id]
  switch (requestType) {
    case REQUEST_START:
      return {
        ...state,
        [action.id]: currentRequestState ? currentRequestState : loadingState.pending,
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
    case REQUEST_CLEAR: {
      const { [action.id]: clearId, ...remainingState } = state
      return remainingState
    }
    default:
      return state
  }
}
