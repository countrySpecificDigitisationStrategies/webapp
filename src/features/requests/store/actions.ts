import { Action } from 'redux'
import { requestId } from 'features/requests/store/types'

export const REQUEST_START = 'request/start'
export const REQUEST_SUCCESS = 'request/success'
export const REQUEST_ERROR = 'request/error'
export const REQUEST_CLEAR = 'request/clear'

type RequestType = typeof REQUEST_START | typeof REQUEST_SUCCESS | typeof REQUEST_ERROR | typeof REQUEST_CLEAR

export const getRequestType = (type: Action['type']): RequestType | null => {
  if (type.includes(REQUEST_START)) return REQUEST_START
  if (type.includes(REQUEST_SUCCESS)) return REQUEST_SUCCESS
  if (type.includes(REQUEST_ERROR)) return REQUEST_ERROR
  if (type.includes(REQUEST_CLEAR)) return REQUEST_CLEAR
  return null
}

export type SuccessResponse = object
export type ErrorResponse = { name: string; detail: string }
type SuccessActionCreator<T = SuccessResponse> = (payload: T) => Action
type ErrorActionCreator<T = ErrorResponse> = (error: T) => Action

export interface RequestStart<S = SuccessResponse, E = ErrorResponse> {
  type: string
  id: requestId
  request: () => Promise<object>
  onSuccess: SuccessActionCreator<S> | SuccessActionCreator<S>[]
  onError?: ErrorActionCreator<E> | ErrorActionCreator<E>[]
  clearAfter?: boolean
}

export interface RequestSuccess<T = SuccessResponse> {
  type: string
  id: requestId
  payload: T
  actions: SuccessActionCreator<T>[]
}

export interface RequestError<T = ErrorResponse> {
  type: string
  id: requestId
  payload: T
  actions?: ErrorActionCreator<T>[]
}

export interface RequestClear {
  type: string
  id: requestId
}

export type RequestAction = RequestStart | RequestSuccess | RequestError | RequestClear

export type CreateRequestReturnType<S = SuccessResponse, E = ErrorResponse> = RequestStart<S, E>
export const createRequest = <S = SuccessResponse, E = ErrorResponse>({
  id,
  request,
  onSuccess,
  onError,
  clearAfter = false,
}: {
  id: RequestStart['id']
  request: RequestStart['request']
  onSuccess: RequestStart<S, E>['onSuccess']
  onError?: RequestStart<S, E>['onError']
  clearAfter?: RequestStart['clearAfter']
}): CreateRequestReturnType<S, E> => ({
  type: `${id}/${REQUEST_START}`,
  id,
  request,
  onSuccess,
  onError,
  clearAfter,
})

export const requestSuccess = ({
  id,
  response,
  actions,
}: {
  id: RequestSuccess['id']
  response: RequestSuccess['payload']
  actions: RequestSuccess['actions']
}): RequestSuccess => ({
  type: `${id}/${REQUEST_SUCCESS}`,
  payload: response,
  id,
  actions,
})

export const requestError = ({
  id,
  response,
  actions,
}: {
  id: RequestError['id']
  response: RequestError['payload']
  actions?: RequestError['actions']
}): RequestError => ({
  type: `${id}/${REQUEST_ERROR}`,
  payload: response,
  id,
  actions,
})

export const clearRequest = ({ id }: Omit<RequestClear, 'type'>): RequestClear => ({
  type: `${id}/${REQUEST_CLEAR}`,
  id,
})
