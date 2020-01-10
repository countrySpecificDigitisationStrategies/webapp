import { Block, Goal, Measure, Situation, StrategiesState, Strategy } from './types'
import { toIndexedObject, addToState } from 'shared/utils'
import { BLOCKS_ADD, GOALS_ADD, MEASURES_ADD, SITUATIONS_ADD, STRATEGIES_ADD, StrategyActionTypes } from './actions'

const initialState: StrategiesState = {
  strategies: null,
  blocks: null,
  situations: null,
  goals: null,
  measures: null,
}

const addToStrategiesState = (state: StrategiesState, key: keyof StrategiesState, object: object) =>
  addToState<StrategiesState>(state, key, object)

export const strategies = (state: StrategiesState = initialState, action: StrategyActionTypes): StrategiesState => {
  switch (action.type) {
    case STRATEGIES_ADD:
      return addToStrategiesState(state, 'strategies', toIndexedObject<Strategy>(action.strategies, 'id'))
    case BLOCKS_ADD:
      return addToStrategiesState(state, 'blocks', toIndexedObject<Block>(action.blocks, 'id'))
    case SITUATIONS_ADD:
      return addToStrategiesState(state, 'situations', toIndexedObject<Situation>(action.situations, 'id'))
    case GOALS_ADD:
      return addToStrategiesState(state, 'goals', toIndexedObject<Goal>(action.goals, 'id'))
    case MEASURES_ADD:
      return addToStrategiesState(state, 'measures', toIndexedObject<Measure>(action.measures, 'id'))
    default:
      return state
  }
}
