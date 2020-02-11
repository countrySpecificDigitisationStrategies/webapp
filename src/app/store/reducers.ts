import { combineReducers, Reducer } from 'redux'
import { registration } from 'features/registration/store/reducer'
import { authentication } from 'features/authentication/store/reducer'
import { ui } from 'features/ui/store/reducer'
import { analyses } from 'features/analyses/store/reducer'
import { strategies } from 'features/strategies/store/reducer'
import { requests } from 'features/requests/store/reducer'
import { editorReducer as editor } from 'features/strategy-editor'
import { countriesReducer as countries } from 'features/countries'
import { usersReducer as users } from 'features/users'
import { discussionsReducer as discussions } from 'features/discussions/store'

import { AuthState } from 'features/authentication/store'
import { RegistrationState } from 'features/registration/store'
import { UiState } from 'features/ui/store'
import { StrategiesState } from 'features/strategies/store'
import { RequestState } from 'features/requests/store'
import { AnalysesState } from 'features/analyses'
import { StrategyEditorState } from 'features/strategy-editor'
import { CountriesState } from 'features/countries'
import { UsersState } from 'features/users/store'
import { DiscussionsState } from 'features/discussions/store'

export interface ApplicationState {
  authentication: AuthState
  registration: RegistrationState
  ui: UiState
  analyses: AnalysesState
  strategies: StrategiesState
  requests: RequestState
  editor: StrategyEditorState
  countries: CountriesState
  users: UsersState
  discussions: DiscussionsState
}

const rootReducer: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  authentication,
  registration,
  ui,
  analyses,
  strategies,
  requests,
  editor,
  countries,
  users,
  discussions,
})

export default rootReducer
