import { STRATEGIES_SUCCESS, STRATEGIES_ERROR, STRATEGIES_REQUEST, StrategiesAction } from './actions'
import { loadingState, StrategiesState } from './types'
import { toIndexedObject } from 'shared/utils'

const initialState: StrategiesState = {
  loading: loadingState.none,
  error: null,
}

export const strategies = (state: StrategiesState = initialState, action: StrategiesAction): StrategiesState => {
  switch (action.type) {
    case STRATEGIES_REQUEST:
      return {
        ...state,
        loading: loadingState.pending,
      }
    case STRATEGIES_SUCCESS:
      return {
        ...state,
        loading: loadingState.done,
        error: null,
        data: {
          ...state.data,
          ...toIndexedObject(action.strategies, 'id'),
        },
      }
    case STRATEGIES_ERROR:
      return {
        ...state,
        loading: loadingState.failed,
        error: action.error,
      }
    default:
      return state
  }
}
