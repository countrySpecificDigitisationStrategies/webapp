import { ApiError } from 'service'

export interface AuthState {
  isLoading: boolean
  isLoggedIn: boolean
  error?: ApiError
}

export interface UserCredentials {
  email: string
  password: string
}
