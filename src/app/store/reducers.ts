import { combineReducers, Reducer } from 'redux'
import { registration } from 'features/registration/store/reducer'
import { authentication } from 'features/authentication/store/reducer'
import { ui } from 'features/ui/store/reducer'
import { strategies } from 'features/strategies/store/reducer'
import { requests } from 'features/requests/store/reducer'
import { countries } from 'features/countrySelection/store/reducer'
import { AuthState } from '../../features/authentication/store'
import { RegistrationState } from '../../features/registration/store'
import { UiState } from '../../features/ui/store'
import { StrategiesState } from '../../features/strategies/store'
import { RequestState } from '../../features/requests/store'
import { CountriesState } from '../../features/countrySelection/store/types'

export interface ApplicationState {
  authentication: AuthState
  registration: RegistrationState
  ui: UiState
  strategies: StrategiesState
  requests: RequestState
  countries: CountriesState
}

const rootReducer: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  authentication,
  registration,
  ui,
  strategies,
  requests,
  countries,
})

export default rootReducer
