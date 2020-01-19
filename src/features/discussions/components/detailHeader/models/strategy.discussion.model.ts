import { CountryModel, CountryResponse, mapResponseToCountry } from '../../../models/country.discussion.model'

export const mapResponseToStrategies = (response: StrategyResponse[]): StrategyModel[] => {
  return response.map((strategy: StrategyResponse): StrategyModel => mapResponseToStrategy(strategy))
}

export const mapResponseToStrategy = (response: StrategyResponse): StrategyModel => {
  return {
    id: response.id,
    title: response.title,
    description: response.description,
    isPublished: response.is_published,
    country: mapResponseToCountry(response.country),
  }
}

export interface StrategyResponse {
  id: number
  title: string
  description: string
  country: CountryResponse
  is_published: boolean
}

export interface StrategyModel {
  id: number
  title: string
  description: string
  country: CountryModel
  isPublished: boolean
}
