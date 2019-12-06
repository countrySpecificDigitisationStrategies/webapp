export * from './actions.strategies'
export * from './actions.blocks'

import { StrategyActions } from './actions.strategies'
import { BlockActions } from './actions.blocks'

export type StrategyActionTypes = StrategyActions | BlockActions
