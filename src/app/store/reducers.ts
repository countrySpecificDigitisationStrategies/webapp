import { combineReducers, Reducer } from 'redux'
import { authentication } from 'features/authentication/store/reducer'
import { ui } from 'features/ui/store/reducer'
import { analyses } from 'features/analyses/store/reducer'
import { strategies } from 'features/strategies/store/reducer'
import { requests } from 'features/requests/store/reducer'
import { editorReducer as editor } from 'features/strategy-editor'
import { countriesReducer as countries } from 'features/countries'
import { usersReducer as users } from 'features/users'

import { AuthState } from 'features/authentication/store'
import { UiState } from 'features/ui/store'
import { StrategiesState } from 'features/strategies/store'
import { RequestState } from 'features/requests/store'
import { AnalysesState } from 'features/analyses'
import { StrategyEditorState } from 'features/strategy-editor'
import { CountriesState } from 'features/countries'
import { UsersState } from 'features/users/store'

export interface ApplicationState {
  authentication: AuthState
  ui: UiState
  analyses: AnalysesState
  strategies: StrategiesState
  requests: RequestState
  editor: StrategyEditorState
  countries: CountriesState
  users: UsersState
}

const rootReducer: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  authentication,
  ui,
  analyses,
  strategies,
  requests,
  editor,
  countries,
  users,
})

export default rootReducer
