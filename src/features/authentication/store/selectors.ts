import { AuthState } from './types'

export const isLoggedIn = (state: AuthState) => !!state.authentication.isLoggedIn
export const isLoading = (state: AuthState) => !!state.authentication.isLoading
export const getError = (state: AuthState) => state.authentication.error
