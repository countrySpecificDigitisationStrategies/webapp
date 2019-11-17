import { combineReducers } from 'redux'
import { accountReducer } from './account/reducer'

const rootReducer = combineReducers({
  accountReducer,
})

export default rootReducer
