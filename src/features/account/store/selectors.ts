import { ApplicationState } from 'app/store/reducers'
import { isRequestDone } from 'features/requests/store'

import { AccountState } from './types'
import { REGISTRATION_REQUEST_ID } from './actions'

const getSlice = (state: ApplicationState): AccountState => state.account

export const isLoggedIn = (state: ApplicationState) => getSlice(state).token !== null
export const getAuthToken = (state: ApplicationState) => getSlice(state).token

export const getAccount = (state: ApplicationState): AccountState['account'] => getSlice(state).account

export const registrationSucceeded = isRequestDone(REGISTRATION_REQUEST_ID)
