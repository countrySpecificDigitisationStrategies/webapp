import { Strategy } from './types'
import { Endpoints, get } from 'app/service'
import { createRequest } from 'features/requests/store'

export const STRATEGIES_REQUEST_ID = 'strategies'
export const STRATEGIES_ADD = 'strategies/add'

interface StrategiesAdd {
  type: typeof STRATEGIES_ADD
  strategies: Strategy[]
}

export type StrategiesAction = StrategiesAdd

/** Strategies Actions */
export const loadAll = () =>
  createRequest({
    id: STRATEGIES_REQUEST_ID,
    request: () => get(Endpoints.strategies),
    onSuccess: addStrategies,
  })

const addStrategies = (strategies: Strategy[]): StrategiesSuccess => ({
  type: STRATEGIES_ADD,
  strategies,
})
