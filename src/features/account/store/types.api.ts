import { CountryResponse } from 'features/countries/store'
import { BoardResponse } from 'features/users/store'

export interface AccountResponse {
  id: number
  email: string
  country: CountryResponse
  firstname: string
  lastname: string
  currentCountry: CountryResponse
  boards: BoardResponse[]
  isModerator: boolean
  created: string
  updated: string
}

export interface RegistrationRequest {
  firstname: string
  lastname: string
  email: string
  password: string
  country: number
}

export interface AccountPatchRequest {
  firstname?: string
  lastname?: string
  email?: string
  password?: string
  country?: number
}

export interface LoginSuccessResponse {
  token: AuthToken
}

export type AuthToken = string
