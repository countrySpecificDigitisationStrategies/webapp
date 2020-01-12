import { StrategyMeasure } from './types'
import { Endpoint, get } from 'app/service'
import { createRequest } from 'features/requests/store'

export const STRATEGY_MEASURES_REQUEST_ID = 'strategy-measures'
export const STRATEGY_MEASURES_ADD = 'strategy-measures/add'

interface StrategyMeasuresAdd {
  type: typeof STRATEGY_MEASURES_ADD
  strategyMeasures: StrategyMeasure[]
}

export type StrategyMeasureActions = StrategyMeasuresAdd

export const loadStrategyMeasures = () =>
  createRequest({
    id: STRATEGY_MEASURES_REQUEST_ID,
    request: () => get(Endpoint.strategyMeasures),
    onSuccess: addStrategyMeasures,
  })

const addStrategyMeasures = (strategyMeasures: StrategyMeasure[]): StrategyMeasuresAdd => ({
  type: STRATEGY_MEASURES_ADD,
  strategyMeasures,
})
