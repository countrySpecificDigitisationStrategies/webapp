import { Action, Dispatch } from 'redux'
import { hideLoading, showError, showLoading } from 'features/ui/store'
import { ApiError } from 'app/service'

interface RequestAction<T> {
  type: T
  request: (action: Action<T>) => Promise<object>
  onSuccess: (data: object, dispatch: Dispatch) => void
  onError?: (error: object, dispatch: Dispatch) => void
}

const registeredActions: Array<RequestAction> = []

/** Register Actions, that should be able to trigger an asynchronous request */
export const registerRequestAction = (action: RequestAction) => {
  registeredActions.push(action)
}

/** Use requestHandler as Middleware to start an asynchronous request, when a registered action was dispatched */
export const requestHandler = ({ dispatch }) => next => currentAction => {
  registeredActions.forEach(registeredAction => {
    if (registeredAction.type === currentAction.type) {
      dispatch(showLoading())
      registeredAction
        .request(currentAction)
        .then(data => registeredAction.onSuccess(data, dispatch))
        .catch(handleError(dispatch, registeredAction.onError))
        .finally(() => dispatch(hideLoading()))
    }
  })
  next(currentAction)
}

const handleError = (dispatch: Dispatch, registeredErrorHandler: RequestAction.onError) => (error: ApiError) => {
  dispatch(
    showError({
      title: error.name,
      message: error.detail,
    })
  )
  if (registeredErrorHandler) {
    registeredErrorHandler(error, dispatch)
  }
}
