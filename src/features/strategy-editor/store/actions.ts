import { Endpoint, post, put } from 'app/service'
import { createRequest } from 'features/requests/store'
import { showError } from 'features/ui/store'

import { StrategyDraft, StrategyDraftFields, StrategyMeasureDraft } from './types'
import { StrategyEditRequest } from './types.api'

export const STRATEGY_EDITOR_REQUEST_ID = 'strategy-editor'
export const STRATEGY_EDITOR_CLEAR = 'strategy-editor/clear'
export const STRATEGY_EDITOR_SET_FIELDS = 'strategy-editor/fields/set'
export const STRATEGY_EDITOR_ADD_MEASURE = 'strategy-editor/measure/add'
export const STRATEGY_EDITOR_REMOVE_MEASURE = 'strategy-editor/measure/remove'

interface StrategyEditorClear {
  type: typeof STRATEGY_EDITOR_CLEAR
}

interface StrategyEditorSetFields {
  type: typeof STRATEGY_EDITOR_SET_FIELDS
  payload: StrategyDraftFields
}

interface StrategyEditorAddMeasure {
  type: typeof STRATEGY_EDITOR_ADD_MEASURE
  payload: StrategyMeasureDraft
}

interface StrategyEditorRemoveMeasure {
  type: typeof STRATEGY_EDITOR_REMOVE_MEASURE
  payload: StrategyMeasureDraft['measure']
}

export type StrategyEditorActions =
  | StrategyEditorClear
  | StrategyEditorSetFields
  | StrategyEditorAddMeasure
  | StrategyEditorRemoveMeasure

export const setFields = (fields: StrategyDraftFields): StrategyEditorSetFields => ({
  type: STRATEGY_EDITOR_SET_FIELDS,
  payload: fields,
})

export const addMeasure = (measure: StrategyMeasureDraft): StrategyEditorAddMeasure => ({
  type: STRATEGY_EDITOR_ADD_MEASURE,
  payload: measure,
})

export const removeMeasure = (id: StrategyMeasureDraft['measure']): StrategyEditorRemoveMeasure => ({
  type: STRATEGY_EDITOR_REMOVE_MEASURE,
  payload: id,
})

export const submitStrategy = ({ id, ...strategy }: StrategyDraft) => {
  const data = transformRequestData(strategy)
  return createRequest({
    id: STRATEGY_EDITOR_REQUEST_ID,
    request: () => (id ? put(Endpoint.strategies, id, data) : post(Endpoint.strategies, data)),
    onSuccess: () => showError({ title: 'SUCCESS', message: 'Successfully submitted Strategy' }),
  })
}

const transformRequestData = (strategy: StrategyDraft): StrategyEditRequest => ({
  ...strategy,
  strategyMeasures: Object.values(strategy.strategyMeasures),
})
