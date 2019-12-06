import { Strategy } from './types'
import { Endpoints, get } from 'app/service'
import { registerRequestAction } from 'app/store/middleware'

export const STRATEGIES_REQUEST = 'strategies/request'
export const STRATEGIES_ADD = 'strategies/add'

interface StrategiesRequest {
  type: typeof STRATEGIES_REQUEST
}

interface StrategiesAdd {
  type: typeof STRATEGIES_ADD
  strategies: Strategy[]
}

export type StrategiesAction = StrategiesRequest | StrategiesAdd

/** Strategies Actions */
export const loadAll = (() => {
  const type = STRATEGIES_REQUEST
  registerRequestAction({
    type,
    request: () => get(Endpoints.strategies),
    onSuccess: (strategies: Strategy[], dispatch) => dispatch(addStrategies(strategies)),
  })
  return (): StrategiesRequest => ({
    type,
  })
})()

const addStrategies = (strategies: Strategy[]): StrategiesSuccess => ({
  type: STRATEGIES_ADD,
  strategies,
})
