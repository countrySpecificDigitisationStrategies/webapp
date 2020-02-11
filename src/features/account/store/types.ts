import { User } from 'features/users'

export interface AccountState {
  account: Account | null
  token: string | null
}

export type Account = User

export interface UserCredentials {
  email: string
  password: string
}
