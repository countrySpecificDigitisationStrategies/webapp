import { CountryResponse } from 'features/countries'

export interface AccountResponse {
  id: number
  email: string
  country: CountryResponse['id']
  firstname: string
  lastname: string
  currentCountry: CountryResponse['id']
  boards: BoardResponse[]
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
  country: CountryResponse['id']
  currentCountry: CountryResponse['id']
  groups: [] //?
  userPermissions: [] //?
}
