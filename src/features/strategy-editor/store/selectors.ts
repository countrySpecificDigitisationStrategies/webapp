import { ApplicationState } from 'app/store/reducers'
import { StrategyEditorState, StrategyMeasureDraft } from 'features/strategy-editor/store/types'

const getStrategyEditorState = (state: ApplicationState): StrategyEditorState => state['editor']
export const getFields = (state: ApplicationState) => getStrategyEditorState(state).fields
export const getMeasureDrafts = (state: ApplicationState) => getStrategyEditorState(state).measures
export const getMeasureDraft = (measureId: StrategyMeasureDraft['measure']) => (
  state: ApplicationState
): StrategyMeasureDraft | undefined => getMeasureDrafts(state)[measureId]
