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
  // strategies,
  strategies: mockStrategyData(strategies),
})

//TODO: should be removed once api delivers real relation data
const mockStrategyData = (strategies: Strategy[]) =>
  strategies.map(strategy => ({
    ...strategy,
    blocks: [1, 2, 3, 4],
  }))
