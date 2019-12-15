import { loadingState, requestId, RequestState } from 'features/requests/store/types'

const getRequests = (state): RequestState => state.requests

const getRequest = (id: requestId): loadingState | undefined => state =>
  Object.keys(getRequests(state)).find(e => e === id)

export const isAnyPending = (state): boolean =>
  Object.values(getRequests(state)).find(e => e === loadingState.pending) !== undefined

export const doesRequestExist = (id: requestId) => (state): boolean => getRequest(id)(state) !== undefined
