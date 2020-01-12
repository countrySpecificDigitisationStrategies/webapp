export { STRATEGIES_REQUEST_ID, STRATEGIES_ADD, loadStrategies } from './actions.strategies'
export { BLOCKS_REQUEST_ID, BLOCKS_ADD, loadBlocks } from './actions.blocks'
export { SITUATIONS_REQUEST_ID, SITUATIONS_ADD, loadSituations } from './actions.situations'
export { GOALS_REQUEST_ID, GOALS_ADD, loadGoals } from './actions.goals'
export { MEASURES_REQUEST_ID, MEASURES_ADD, loadMeasures } from './actions.measures'

import { StrategyActions } from './actions.strategies'
import { BlockActions } from './actions.blocks'
import { SituationActions } from './actions.situations'
import { GoalActions } from './actions.goals'
import { MeasureActions } from './actions.measures'

export type StrategyActionTypes = StrategyActions | BlockActions | SituationActions | GoalActions | MeasureActions
