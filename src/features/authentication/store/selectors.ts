import { ApplicationState } from 'app/store/reducers'
import { AuthState } from './types'

const getAuthState = (state: ApplicationState): AuthState => state.authentication
export const isLoggedIn = (state: ApplicationState) => getAuthState(state).isLoggedIn
