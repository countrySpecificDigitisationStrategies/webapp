export const mapResponseToStrategyMeasure = (response: StrategyMeasureResponse): StrategyMeasureModel => {
  return {
    id: response.id,
    measureTitle: response.measure.title,
    measureDescription: response.measure.description,
    description: response.description,
  }
}

export interface StrategyMeasureResponse {
  id: number
  measure: MeasureResponse
  description: string
}

interface MeasureResponse {
  title: string
  description: string
}

export interface StrategyMeasureModel {
  id: number
  measureTitle: string
  measureDescription: string
  description: string
}
