import { CountryResponse } from './country.discussion.model'

export const mapResponseToUser = (response: UserResponse): UserModel => {
  return {
    id: response.id,
    firstName: response.firstname,
    lastName: response.lastname,
    countryFlag: response.country.flag_rectangle,
    isAdmin: response.is_admin,
    isRepresentative: response.is_representative,
    isModerator: response.is_moderator,
  }
}

export interface UserResponse {
  id: number
  firstname: string
  lastname: string
  is_admin: boolean
  is_representative: boolean
  is_moderator: boolean
  country: CountryResponse
}

export interface UserModel {
  id: number
  firstName: string
  lastName: string
  countryFlag: string
  isAdmin: boolean
  isRepresentative: boolean
  isModerator: boolean
}
