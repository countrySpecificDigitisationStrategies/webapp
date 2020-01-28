import { Strategy, StrategyMeasure } from 'features/strategies'
import { Board } from 'features/users/store'

export type StrategyEditorState = {
  fields: { [name in keyof StrategyDraftFields]: StrategyDraftFields[name] }
  measures: { [measureId in StrategyMeasureDraft['measure']]: StrategyMeasureDraft }
}

export interface StrategyDraft {
  id?: Strategy['id']
  board: Board['id']
  title: Strategy['title']
  description: Strategy['description']
  isPublished: Strategy['isPublished']
  strategyMeasures: { [measureId in StrategyMeasureDraft['measure']]: StrategyMeasureDraft }
}

export interface StrategyMeasureDraft {
  id?: StrategyMeasure['id']
  measure: StrategyMeasure['measure']
  description: StrategyMeasure['description']
}

export type StrategyDraftFields = Omit<StrategyDraft, 'strategyMeasures' | 'board'>
