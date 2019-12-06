import { STRATEGIES_ADD, StrategiesAction } from './actions'
import { StrategiesState } from './types'
import { toIndexedObject } from 'shared/utils'

const initialState: StrategiesState = {
  data: null,
}

export const strategies = (state: StrategiesState = initialState, action: StrategiesAction): StrategiesState => {
  switch (action.type) {
    case STRATEGIES_ADD:
      return {
        ...state,
        data: {
          ...state.data,
          ...toIndexedObject(action.strategies, 'id'),
        },
      }
    default:
      return state
  }
}
