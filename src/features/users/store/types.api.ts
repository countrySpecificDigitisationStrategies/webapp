import { CountryResponse } from 'features/countries'

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

export interface BoardResponse {
  id: number
  country: CountryResponse
  users: UserResponse[]
  created: string
  updated: string
}

export interface UserResponse {
  id: number
  password: string
  lastLogin: string
  updated: string
  created: string
  email: string
  firstname: string
  lastname: string
  isActive: boolean
  isStaff: boolean
  isSuperuser: boolean
  isModerator: boolean
  country: CountryResponse
  currentCountry: CountryResponse
  groups: [] //?
  userPermissions: [] //?
}

export interface RegistrationRequest {
  firstname: string
  lastname: string
  email: string
  password: string
  country: number
}
