import { Middleware, Dispatch } from 'redux'
import {
  getRequestType,
  REQUEST_ERROR,
  REQUEST_START,
  REQUEST_SUCCESS,
  requestError,
  requestSuccess,
  clearRequest,
  RequestStart,
  RequestSuccess,
  RequestError,
} from './actions'
import { showError } from 'features/ui/store'
import { ApiError } from 'app/service'

export const requestHandler: Middleware = ({ dispatch }) => next => action => {
  const requestType = getRequestType(action.type)
  switch (requestType) {
    case REQUEST_START:
      handleRequestStart(action, dispatch)
      break
    case REQUEST_SUCCESS:
      handleRequestSuccess(action, dispatch)
      break
    case REQUEST_ERROR:
      handleRequestError(action, dispatch)
      break
  }
  next(action)
}

const handleRequestStart = (action: RequestStart, dispatch: Dispatch) => {
  const { request, id, onSuccess, onError, clearAfter } = action
  const successActions = Array.isArray(onSuccess) ? onSuccess : [onSuccess]
  const errorActions = onError ? (Array.isArray(onError) ? onError : [onError]) : undefined

  request()
    .then((response: object) => dispatch(requestSuccess({ id, response, actions: successActions })))
    .catch((response: ApiError) => dispatch(requestError({ id, response, actions: errorActions })))
    .finally(() => {
      if (clearAfter) {
        dispatch(clearRequest({ id }))
      }
    })
}

const handleRequestSuccess = (currentAction: RequestSuccess, dispatch: Dispatch) => {
  const { payload, actions } = currentAction
  if (actions) {
    actions.forEach(action => dispatch(action(payload)))
  }
}

const handleRequestError = (currentAction: RequestError, dispatch: Dispatch) => {
  const { payload, actions } = currentAction
  dispatch(
    showError({
      title: payload.name,
      message: payload.detail,
    })
  )
  if (actions) {
    actions.forEach(action => dispatch(action(payload)))
  }
}
