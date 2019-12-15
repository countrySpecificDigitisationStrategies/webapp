import { StrategiesState } from './types'
import { toIndexedObject, addToState } from 'shared/utils'
import { BLOCKS_ADD, GOALS_ADD, MEASURES_ADD, SITUATIONS_ADD, STRATEGIES_ADD, StrategyActionTypes } from './actions'

const initialState: StrategiesState = {
  strategies: null,
}

const addToStrategiesState = (...args) => addToState<StrategiesState>(...args)

export const strategies = (state: StrategiesState = initialState, action: StrategyActionTypes): StrategiesState => {
  switch (action.type) {
    case STRATEGIES_ADD:
      return addToStrategiesState(state, 'strategies', toIndexedObject(action.strategies, 'id'))
    case BLOCKS_ADD:
      return addToStrategiesState(state, 'blocks', toIndexedObject(action.blocks, 'id'))
    case SITUATIONS_ADD:
      return addToStrategiesState(state, 'situations', toIndexedObject(action.situations, 'id'))
    case GOALS_ADD:
      return addToStrategiesState(state, 'goals', toIndexedObject(action.goals, 'id'))
    case MEASURES_ADD:
      return addToStrategiesState(state, 'measures', toIndexedObject(action.measures, 'id'))
    default:
      return state
  }
}
