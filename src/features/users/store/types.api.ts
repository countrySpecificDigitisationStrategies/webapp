import { CountryResponse } from 'features/countries'

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
