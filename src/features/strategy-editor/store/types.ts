import { Strategy, StrategyMeasure } from 'features/strategies'

export type StrategyEditorState = {
  fields: { [name in keyof StrategyDraftFields]?: StrategyDraftFields[name] }
  measures: { [measureId in StrategyMeasureDraft['measure']]: StrategyMeasureDraft }
}

export interface StrategyDraft {
  id?: Strategy['id']
  // country: Country['id']
  title: Strategy['title']
  description: Strategy['description']
  isPublished: Strategy['isPublished']
  strategyMeasures: StrategyMeasureDraft[]
}

export interface StrategyMeasureDraft {
  id?: StrategyMeasure['id']
  measure: StrategyMeasure['measure']
  description: StrategyMeasure['description']
}

export type StrategyDraftFields = Omit<StrategyDraft, 'strategyMeasures'>
