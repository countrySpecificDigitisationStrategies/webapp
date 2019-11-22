import { combineReducers } from 'redux'

import { registration } from '../features/registration/store/reducer'
import { authentication } from '../features/authentication/store/reducer'

const reducers = {
  authentication,
  registration,
}

const rootReducer = combineReducers(reducers)

export default rootReducer
