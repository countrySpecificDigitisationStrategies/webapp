import { combineReducers } from 'redux'
import { SAMPLE_ACTION } from './actions'

const sampleReducer = (state: object = {}, action: string): object => {
  switch (action.type) {
    case SAMPLE_ACTION:
      return {
        ...state,
        text: (state.text || '') + action.text,
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  sampleReducer,
})

export default rootReducer
