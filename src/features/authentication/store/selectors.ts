import { AuthState } from './types'

export const isLoggedIn = (state: AuthState) => !!state.authentication.isLoggedIn
export const getError = (state: AuthState) => state.authentication.error
