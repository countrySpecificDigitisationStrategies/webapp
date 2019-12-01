import { Strategy } from './types'
import { ApiError, Endpoints, get } from 'app/service'
import { registerRequestAction } from 'app/store/middleware'

export const STRATEGIES_REQUEST = 'strategies/request'
export const STRATEGIES_SUCCESS = 'strategies/success'
export const STRATEGIES_ERROR = 'strategies/error'

interface StrategiesRequest {
  type: typeof STRATEGIES_REQUEST
}

interface StrategiesSuccess {
  type: typeof STRATEGIES_SUCCESS
  strategies: Strategy[]
}

interface StrategiesError {
  type: typeof STRATEGIES_ERROR
  error: Error
}

export type StrategiesAction = StrategiesRequest | StrategiesSuccess | StrategiesError

/** Strategies Actions */
export const loadAll = (() => {
  const type = STRATEGIES_REQUEST
  registerRequestAction({
    type,
    request: () => get(Endpoints.strategies),
    onSuccess: (strategies: Strategy[], dispatch) => dispatch(strategiesSuccess(strategies)),
    onError: (err: ApiError, dispatch) => dispatch(strategiesError(err)),
  })
  return (): StrategiesRequest => ({
    type,
  })
})()

const strategiesSuccess = (strategies: Strategy[]): StrategiesSuccess => ({
  type: STRATEGIES_SUCCESS,
  strategies,
})

const strategiesError = (error: ApiError): StrategiesError => ({
  type: STRATEGIES_ERROR,
  error,
})
