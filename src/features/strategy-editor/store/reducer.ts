import { StrategyEditorState } from './types'
import { addToState } from 'shared/utils'
import {
  STRATEGY_EDITOR_CLEAR,
  STRATEGY_EDITOR_SET_FIELDS,
  STRATEGY_EDITOR_ADD_MEASURE,
  STRATEGY_EDITOR_REMOVE_MEASURE,
  StrategyEditorActions,
} from './actions'

const initialState: StrategyEditorState = {
  fields: {},
  measures: [],
}

export const editor = (
  state: StrategyEditorState = initialState,
  action: StrategyEditorActions
): StrategyEditorState => {
  switch (action.type) {
    case STRATEGY_EDITOR_CLEAR:
      return initialState
    case STRATEGY_EDITOR_SET_FIELDS:
      return addToState(state, 'fields', action.payload)
    case STRATEGY_EDITOR_ADD_MEASURE:
      return {
        ...state,
        measures: [...state.measures, action.payload],
      }
    case STRATEGY_EDITOR_REMOVE_MEASURE:
      return {
        ...state,
        measures: state.measures.filter(i => i.measure !== action.payload),
      }
    default:
      return state
  }
}
