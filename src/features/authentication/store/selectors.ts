import { AuthState } from './types'

export const isLoggedIn = (state: AuthState) => !!state.authentication.isLoggedIn
