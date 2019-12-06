import { Action, ActionCreator } from 'redux'
import { requestId } from 'features/requests/store/types'

export const REQUEST_START = 'request/start'
export const REQUEST_SUCCESS = 'request/success'
export const REQUEST_ERROR = 'request/error'

export const getRequestType = type => {
  if (type.includes(REQUEST_START)) return REQUEST_START
  if (type.includes(REQUEST_SUCCESS)) return REQUEST_SUCCESS
  if (type.includes(REQUEST_ERROR)) return REQUEST_ERROR
}

type SuccessActionCreator = (payload: object) => Action
type ErrorActionCreator = (error: object) => Action

interface RequestStart {
  type: string
  id: requestId
  request: () => Promise<object>
  onSuccess: SuccessActionCreator
  onError?: ErrorActionCreator
}

interface RequestSuccess {
  type: string
  id: requestId
  payload: object
  action: SuccessActionCreator
}

interface RequestError {
  type: string
  id: requestId
  payload: object
  action: ErrorActionCreator
}

export type RequestAction = RequestStart | RequestSuccess | RequestError

export const createRequest = ({ id, request, onSuccess, onError }) => ({
  type: `${id}/${REQUEST_START}`,
  id,
  request,
  onSuccess,
  onError,
})

export const requestSuccess = ({ id, response, action }): RequestSuccess => ({
  type: `${id}/${REQUEST_SUCCESS}`,
  payload: response,
  id,
  action,
})

export const requestError = ({ id, response, action }): RequestError => ({
  type: `${id}/${REQUEST_ERROR}`,
  payload: response,
  id,
  action,
})
