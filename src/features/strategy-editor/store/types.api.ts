import { StrategyMeasureResponse, StrategyResponse } from 'features/strategies/store/types.api'

export interface StrategyEditRequest {
  // country: CountryResponse['id']
  title: StrategyResponse['title']
  description: StrategyResponse['description']
  isPublished: StrategyResponse['isPublished']
  strategyMeasures: StrategyMeasureEditRequest[]
}

export interface StrategyMeasureEditRequest {
  id?: StrategyMeasureResponse['id']
  measure: StrategyMeasureResponse['measure']
  description: StrategyMeasureResponse['description']
}
