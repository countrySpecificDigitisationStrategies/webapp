import { Action } from 'redux'
import { requestId } from 'features/requests/store/types'

export const REQUEST_START = 'request/start'
export const REQUEST_SUCCESS = 'request/success'
export const REQUEST_ERROR = 'request/error'

type RequestType = typeof REQUEST_START | typeof REQUEST_SUCCESS | typeof REQUEST_ERROR

export const getRequestType = (type: Action['type']): RequestType | null => {
  if (type.includes(REQUEST_START)) return REQUEST_START
  if (type.includes(REQUEST_SUCCESS)) return REQUEST_SUCCESS
  if (type.includes(REQUEST_ERROR)) return REQUEST_ERROR
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
  onSuccess: SuccessActionCreator<S>
  onError?: ErrorActionCreator<E>
}

export interface RequestSuccess<T = SuccessResponse> {
  type: string
  id: requestId
  payload: T
  action: SuccessActionCreator<T>
}

export interface RequestError<T = ErrorResponse> {
  type: string
  id: requestId
  payload: T
  action?: ErrorActionCreator<T>
}

export type RequestAction = RequestStart | RequestSuccess | RequestError

export type CreateRequestReturnType<S = SuccessResponse, E = ErrorResponse> = RequestStart<S, E>
export const createRequest = <S = SuccessResponse, E = ErrorResponse>({
  id,
  request,
  onSuccess,
  onError,
}: {
  id: RequestStart['id']
  request: RequestStart['request']
  onSuccess: RequestStart<S, E>['onSuccess']
  onError?: RequestStart<S, E>['onError']
}): CreateRequestReturnType<S, E> => ({
  type: `${id}/${REQUEST_START}`,
  id,
  request,
  onSuccess,
  onError,
})

export const requestSuccess = ({
  id,
  response,
  action,
}: {
  id: RequestSuccess['id']
  response: RequestSuccess['payload']
  action: RequestSuccess['action']
}): RequestSuccess => ({
  type: `${id}/${REQUEST_SUCCESS}`,
  payload: response,
  id,
  action,
})

export const requestError = ({
  id,
  response,
  action,
}: {
  id: RequestError['id']
  response: RequestError['payload']
  action?: RequestError['action']
}): RequestError => ({
  type: `${id}/${REQUEST_ERROR}`,
  payload: response,
  id,
  action,
})
