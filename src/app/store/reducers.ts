import { combineReducers } from 'redux'

import { registration } from 'features/registration/store/reducer'
import { authentication } from 'features/authentication/store/reducer'
import { ui } from 'features/ui/store/reducer'
import { strategies } from 'features/strategies/store/reducer'

const reducers = {
  authentication,
  registration,
  ui,
  strategies,
}

const rootReducer = combineReducers(reducers)

export default rootReducer
