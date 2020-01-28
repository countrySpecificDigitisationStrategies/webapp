import { CountryModel, CountryResponse } from './country.discussion.model'

export interface BoardResponse {
  id: number
  country: CountryResponse
}

export interface BoardModel {
  id: number
  country: CountryModel
}
