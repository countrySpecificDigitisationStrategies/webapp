import { StrategyEditorState, StrategyMeasureDraft } from './types'
import { addToState } from 'shared/utils'
import {
  STRATEGY_EDITOR_CLEAR,
  STRATEGY_EDITOR_SET_FIELDS,
  STRATEGY_EDITOR_ADD_MEASURE,
  STRATEGY_EDITOR_REMOVE_MEASURE,
  StrategyEditorActions,
} from './actions'

const initialState: StrategyEditorState = {
  fields: {
    title: '',
    description: '',
    isPublished: false,
  },
  measures: {},
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
      return addMeasure(state, action.payload)
    case STRATEGY_EDITOR_REMOVE_MEASURE:
      return removeMeasure(state, action.payload)
    default:
      return state
  }
}

const addMeasure = (state: StrategyEditorState, draft: StrategyMeasureDraft): StrategyEditorState => ({
  ...state,
  measures: {
    ...state.measures,
    [draft.measure]: {
      ...state.measures[draft.measure],
      ...draft,
    },
  },
})

const removeMeasure = (state: StrategyEditorState, id: StrategyMeasureDraft['measure']): StrategyEditorState => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { [id]: removedMeasure, ...measures } = state.measures
  return {
    ...state,
    measures,
  }
}
