import { StrategyMeasure } from './types'
import { Endpoint, get } from 'app/service'
import { createRequest } from 'features/requests/store'
import { StrategyMeasureResponse } from 'features/strategies/store/types.api'

export const STRATEGY_MEASURES_REQUEST_ID = 'strategy-measures'
export const STRATEGY_MEASURES_ADD = 'strategy-measures/add'

interface StrategyMeasuresAdd {
  type: typeof STRATEGY_MEASURES_ADD
  strategyMeasures: StrategyMeasure[]
}

export type StrategyMeasureActions = StrategyMeasuresAdd

export const loadStrategyMeasures = () =>
  createRequest<StrategyMeasureResponse[]>({
    id: STRATEGY_MEASURES_REQUEST_ID,
    request: () => get(Endpoint.strategyMeasures),
    onSuccess: data => addStrategyMeasures(transformResponseData(data)),
  })

const addStrategyMeasures = (strategyMeasures: StrategyMeasure[]): StrategyMeasuresAdd => ({
  type: STRATEGY_MEASURES_ADD,
  strategyMeasures,
})

const transformResponseData = (strategyMeasures: StrategyMeasureResponse[]): StrategyMeasure[] => {
  return strategyMeasures.map(({ created, updated, ...strategyMeasure }) => ({
    ...strategyMeasure,
    created: new Date(created),
    updated: new Date(updated),
  }))
}
