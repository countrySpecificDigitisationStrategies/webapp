import { UserCredentials } from 'features/authentication/store'

export interface RegistrationState {
  isSuccess: boolean
}

export interface UserData extends UserCredentials {
  name: string
}

export interface Country {
  id: number
  name: string
  flag: string
  flag_circle: string
  flag_rectangle: string
  is_developing_country: boolean
  created: Date
  updated: Date
}
