import { AnalysesState } from './types'
import { toIndexedObject, addToState } from 'shared/utils'
import { ANALYSES_ADD, AnalysesActionTypes } from './actions'

const initialState: AnalysesState = {
  analyses: null,
}

const addToAnalysesState = (state: AnalysesState, key: keyof AnalysesState, object: object) =>
  addToState<AnalysesState>(state, key, object)

export const analyses = (state: AnalysesState = initialState, action: AnalysesActionTypes): AnalysesState => {
  switch (action.type) {
    case ANALYSES_ADD:
      return addToAnalysesState(state, 'analyses', toIndexedObject(action.analyses, 'id'))
    default:
      return state
  }
}
