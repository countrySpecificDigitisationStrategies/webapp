export { STRATEGIES_REQUEST_ID, STRATEGIES_ADD, loadStrategies } from './actions.strategies'
export { BLOCKS_REQUEST_ID, BLOCKS_ADD, loadBlocks } from './actions.blocks'
export { SITUATIONS_REQUEST_ID, SITUATIONS_ADD, loadSituations } from './actions.situations'
export { CATEGORIES_REQUEST_ID, CATEGORIES_ADD, loadCategories } from './actions.categories'
export { MEASURES_REQUEST_ID, MEASURES_ADD, loadMeasures } from './actions.measures'
export { STRATEGY_MEASURES_REQUEST_ID, STRATEGY_MEASURES_ADD, loadStrategyMeasures } from './actions.strategy-measures'

import { StrategyActions } from './actions.strategies'
import { BlockActions } from './actions.blocks'
import { SituationActions } from './actions.situations'
import { CategoryActions } from './actions.categories'
import { MeasureActions } from './actions.measures'
import { StrategyMeasureActions } from './actions.strategy-measures'

export type StrategyActionTypes =
  | StrategyActions
  | BlockActions
  | SituationActions
  | CategoryActions
  | MeasureActions
  | StrategyMeasureActions
