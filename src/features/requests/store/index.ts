export { createRequest } from './actions'
export { isAnyPending, doesRequestExist, isRequestPending, isRequestDone } from './selectors'
export { loadingState } from './types'
export { requestHandler } from './middleware'

import {
  CreateRequestReturnType as _CreateRequestReturnType,
  SuccessResponse as _SuccessResponse,
  ErrorResponse as _ErrorResponse,
} from './actions'
export type CreateRequestReturnType<S = SuccessResponse, E = ErrorResponse> = _CreateRequestReturnType<S, E>
export type SuccessResponse = _SuccessResponse
export type ErrorResponse = _ErrorResponse

import { requestId as _requestId, RequestState as _RequestState } from './types'
export type requestId = _requestId
export type RequestState = _RequestState
