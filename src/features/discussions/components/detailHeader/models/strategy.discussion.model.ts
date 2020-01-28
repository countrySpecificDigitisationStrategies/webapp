import { CountryModel, mapResponseToCountry } from '../../../models/country.discussion.model'
import { BoardResponse } from '../../../models/board.discussion.model'

export const mapResponseToStrategies = (response: StrategyResponse[]): StrategyModel[] => {
  return response.map((strategy: StrategyResponse): StrategyModel => mapResponseToStrategy(strategy))
}

export const mapResponseToStrategy = (response: StrategyResponse): StrategyModel => {
  return {
    id: response.id,
    title: response.title,
    description: response.description,
    isPublished: response.isPublished,
    country: mapResponseToCountry(mapResponseToCountry(response.board.country)),
  }
}

export interface StrategyResponse {
  id: number
  title: string
  description: string
  board: BoardResponse
  isPublished: boolean
}

export interface StrategyModel {
  id: number
  title: string
  description: string
  country: CountryModel
  isPublished: boolean
}
