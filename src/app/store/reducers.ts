import { combineReducers, Reducer } from 'redux'
import { accountReducer as account } from 'features/account'
import { ui } from 'features/ui/store/reducer'
import { analyses } from 'features/analyses/store/reducer'
import { strategies } from 'features/strategies/store/reducer'
import { requests } from 'features/requests/store/reducer'
import { editorReducer as editor } from 'features/strategy-editor'
import { countriesReducer as countries } from 'features/countries'
import { usersReducer as users } from 'features/users'

import { AccountState } from 'features/account'
import { UiState } from 'features/ui/store'
import { StrategiesState } from 'features/strategies/store'
import { RequestState } from 'features/requests/store'
import { AnalysesState } from 'features/analyses'
import { StrategyEditorState } from 'features/strategy-editor'
import { CountriesState } from 'features/countries'
import { UsersState } from 'features/users/store'

export interface ApplicationState {
  account: AccountState
  ui: UiState
  analyses: AnalysesState
  strategies: StrategiesState
  requests: RequestState
  editor: StrategyEditorState
  countries: CountriesState
  users: UsersState
}

const rootReducer: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  account,
  ui,
  analyses,
  strategies,
  requests,
  editor,
  countries,
  users,
})

export default rootReducer
