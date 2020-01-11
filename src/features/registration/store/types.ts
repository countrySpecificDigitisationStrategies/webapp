import { UserCredentials } from 'features/authentication/store'

export interface RegistrationState {
  isSuccess: boolean
}

export interface UserData extends UserCredentials {
  name: string
}
