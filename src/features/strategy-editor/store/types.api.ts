import { MeasureResponse, StrategyMeasureResponse, StrategyResponse } from 'features/strategies/store/types.api'

export interface StrategyEditRequest {
  // country: CountryResponse['id']
  title: StrategyResponse['title']
  description: StrategyResponse['description']
  isPublished: StrategyResponse['isPublished']
  strategyMeasures: StrategyMeasureEditRequest[]
}

export interface StrategyMeasureEditRequest {
  // id: StrategyResponse['id']
  measure: MeasureResponse['id']
  description: StrategyMeasureResponse['description']
}
