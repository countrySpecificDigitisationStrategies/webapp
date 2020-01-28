import { ApplicationState } from 'app/store/reducers'
import { loadingState, requestId, RequestState } from 'features/requests/store/types'

const getRequests = (state: ApplicationState): RequestState => state.requests

const getRequest = (id: requestId) => (state: ApplicationState): loadingState | undefined => getRequests(state)[id]

export const isAnyPending = (state: ApplicationState): boolean =>
  Object.values(getRequests(state)).find(e => e === loadingState.pending) !== undefined

export const doesRequestExist = (id: requestId) => (state: ApplicationState): boolean =>
  getRequest(id)(state) !== undefined

export const isRequestPending = (id: requestId) => (state: ApplicationState): boolean =>
  getRequest(id)(state) === loadingState.pending
