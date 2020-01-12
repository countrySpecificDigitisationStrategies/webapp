import { Strategy } from './types'
import { Endpoint, get } from 'app/service'
import { createRequest } from 'features/requests/store'

export const STRATEGIES_REQUEST_ID = 'strategies'
export const STRATEGIES_ADD = 'strategies/add'

interface StrategiesAdd {
  type: typeof STRATEGIES_ADD
  strategies: Strategy[]
}

export type StrategyActions = StrategiesAdd

/** Strategies Actions */
export const loadStrategies = () =>
  createRequest<Strategy[]>({
    id: STRATEGIES_REQUEST_ID,
    request: () => get(Endpoint.strategies),
    onSuccess: addStrategies,
  })

const addStrategies = (strategies: Strategy[]): StrategiesAdd => ({
  type: STRATEGIES_ADD,
  strategies,
})
