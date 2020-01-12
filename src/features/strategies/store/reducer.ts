import { Block, Category, Measure, Situation, StrategiesState, Strategy, StrategyMeasure } from './types'
import { addToState, toIndexedObject } from 'shared/utils'
import {
  BLOCKS_ADD,
  CATEGORIES_ADD,
  MEASURES_ADD,
  SITUATIONS_ADD,
  STRATEGIES_ADD,
  STRATEGY_MEASURES_ADD,
  StrategyActionTypes,
} from './actions'

const initialState: StrategiesState = {
  strategies: null,
  blocks: null,
  situations: null,
  categories: null,
  measures: null,
  strategyMeasures: null,
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
    case CATEGORIES_ADD:
      return addToStrategiesState(state, 'categories', toIndexedObject<Category>(action.categories, 'id'))
    case MEASURES_ADD:
      return addToStrategiesState(state, 'measures', toIndexedObject<Measure>(action.measures, 'id'))
    case STRATEGY_MEASURES_ADD:
      return addToStrategiesState(
        state,
        'strategyMeasures',
        toIndexedObject<StrategyMeasure>(action.strategyMeasures, 'id')
      )
    default:
      return state
  }
}
