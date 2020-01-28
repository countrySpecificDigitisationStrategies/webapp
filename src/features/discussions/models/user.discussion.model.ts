import { CountryResponse } from './country.discussion.model'

export const mapResponseToUser = (response: UserResponse): UserModel => {
  return {
    id: response.id,
    firstName: response.firstname,
    lastName: response.lastname,
    countryFlag: response.country?.flagRectangle,
    isAdmin: response.isAdmin,
    isRepresentative: response.isRepresentative,
    isModerator: response.isModerator,
  }
}

export interface UserResponse {
  id: number
  firstname: string
  lastname: string
  isAdmin: boolean
  isRepresentative: boolean
  isModerator: boolean
  country: CountryResponse
}

export interface UserModel {
  id: number
  firstName: string
  lastName: string
  countryFlag: string | null
  isAdmin: boolean
  isRepresentative: boolean
  isModerator: boolean
}
