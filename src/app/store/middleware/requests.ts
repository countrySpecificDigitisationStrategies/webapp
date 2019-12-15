import {
  getRequestType,
  REQUEST_ERROR,
  REQUEST_START,
  REQUEST_SUCCESS,
  requestError,
  requestSuccess,
} from 'features/requests/store'
import { showError } from 'features/ui/store'
import { ApiError } from 'app/service'

export const requestHandler = ({ dispatch }) => next => action => {
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

const handleRequestStart = (action, dispatch) => {
  const { request, id, onSuccess, onError } = action
  request()
    .then((response: object) => dispatch(requestSuccess({ id, response, action: onSuccess })))
    .catch((response: ApiError) => dispatch(requestError({ id, response, action: onError })))
}

const handleRequestSuccess = (currentAction, dispatch) => {
  const { payload, action } = currentAction
  if (action) {
    dispatch(action(payload))
  }
}

const handleRequestError = (currentAction, dispatch) => {
  const { payload, action } = currentAction
  dispatch(
    showError({
      title: payload.name,
      message: payload.detail,
    })
  )

  if (action) {
    dispatch(action(payload))
  }
}
