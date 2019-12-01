import { Action, Dispatch } from 'redux'
import { hideLoading, showLoading } from 'features/ui/store'

interface RequestAction<T> {
  type: T
  request: (action: Action<T>) => Promise<object>
  onSuccess: (data: object, dispatch: Dispatch) => void
  onError: (error: object, dispatch: Dispatch) => void
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
        .catch(err => registeredAction.onError(err, dispatch))
        .finally(() => dispatch(hideLoading()))
    }
  })
  next(currentAction)
}
