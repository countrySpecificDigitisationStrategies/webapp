import { CountryModel, CountryResponse, mapResponseToCountry } from './country.discussion.model'

export const mapResponseToBoard = (response: BoardResponse): BoardModel => {
  return {
    id: response.id,
    country: mapResponseToCountry(response.country),
  }
}

export interface BoardResponse {
  id: number
  country: CountryResponse
}

export interface BoardModel {
  id: number
  country: CountryModel
}
