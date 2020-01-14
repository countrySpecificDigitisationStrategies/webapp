import { Measure, Strategy, StrategyMeasure } from 'features/strategies'

export type StrategyEditorState = {
  fields: { [name in keyof StrategyDraftFields]?: StrategyDraftFields[name] }
  measures: StrategyMeasureDraft[]
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
  // id: Strategy['id']
  measure: Measure['id']
  description: StrategyMeasure['description']
}

export type StrategyDraftFields = Omit<StrategyDraft, 'strategyMeasures'>
