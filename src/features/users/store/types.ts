import { Country } from 'features/countries'

export type UsersState = {
  account: Account | {}
  boards: { [id in Board['id']]: Board }
  users: { [id in User['id']]: User }
}

export interface Account extends User {
  boards: Board['id'][]
}

export interface Board {
  id: number
  country: Country['id']
  users: User['id'][]
  created: Date
  updated: Date
}

export interface User {
  id: number
  updated: Date
  created: Date
  email: string
  firstName: string
  lastName: string
  country: Country['id']
  currentCountry: Country['id']
}
