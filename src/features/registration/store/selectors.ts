import { ApplicationState } from 'app/store/reducers'
import { RegistrationState } from './types'

const getRegistrationState = (state: ApplicationState): RegistrationState => state.registration
export const isSuccess = (state: ApplicationState) => getRegistrationState(state).isSuccess
