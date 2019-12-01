import { ApiError } from 'app/service'

export interface AuthState {
  isLoggedIn: boolean
  error?: ApiError
}

export interface UserCredentials {
  email: string
  password: string
}
