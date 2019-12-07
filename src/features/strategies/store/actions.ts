export * from './actions.strategies'
export * from './actions.blocks'
export * from './actions.situations'
export * from './actions.goals'
export * from './actions.measures'

import { StrategyActions } from './actions.strategies'
import { BlockActions } from './actions.blocks'
import { SituationActions } from './actions.situations'
import { GoalActions } from './actions.goals'
import { MeasureActions } from './actions.measures'

export type StrategyActionTypes = StrategyActions | BlockActions | SituationActions | GoalActions | MeasureActions
