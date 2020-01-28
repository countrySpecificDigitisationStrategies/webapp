import { StrategyMeasureResponse, StrategyResponse } from 'features/strategies/store/types.api'
import { BoardResponse } from 'features/users/store'

export interface StrategyEditRequest {
  board: BoardResponse['id']
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
