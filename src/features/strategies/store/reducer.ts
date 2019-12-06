import { STRATEGIES_ADD, StrategyActionTypes } from './actions'
import { StrategiesState } from './types'
import { toIndexedObject } from 'shared/utils'
import { BLOCKS_ADD } from 'features/strategies/store/actions.blocks'

const initialState: StrategiesState = {
  strategies: null,
}

export const strategies = (state: StrategiesState = initialState, action: StrategyActionTypes): StrategiesState => {
  switch (action.type) {
    case STRATEGIES_ADD:
      return {
        ...state,
        strategies: {
          ...state.strategies,
          ...toIndexedObject(action.strategies, 'id'),
        },
      }
    case BLOCKS_ADD:
      return {
        ...state,
        blocks: {
          ...state.blocks,
          ...toIndexedObject(action.blocks, 'id'),
        },
      }
    default:
      return state
  }
}
