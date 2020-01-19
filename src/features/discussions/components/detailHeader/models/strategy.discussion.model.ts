import { CountryModel, CountryResponse, mapResponseToCountry } from '../../../models/country.discussion.model'

export const mapResponseToStrategies = (response: StrategyResponse[]): StrategyModel[] => {
  return response.map((strategy: StrategyResponse): StrategyModel => mapResponseToStrategy(strategy))
}

export const mapResponseToStrategy = (response: StrategyResponse): StrategyModel => {
  // console.log('response obj', response)
  // console.log('response obj is published', response.is_published)
  return {
    id: response.id,
    title: response.title,
    description: response.description,
    isPublished: response.isPublished,
    country: mapResponseToCountry(response.country),
  }
}

export interface StrategyResponse {
  id: number
  title: string
  description: string
  country: CountryResponse
  isPublished: boolean
}

export interface StrategyModel {
  id: number
  title: string
  description: string
  country: CountryModel
  isPublished: boolean
}
