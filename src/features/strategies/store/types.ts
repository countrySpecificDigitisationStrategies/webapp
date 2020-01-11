export interface StrategiesState {
  strategies: { [id in Strategy['id']]: Strategy } | null
  blocks: { [id in Block['id']]: Block } | null
  situations: { [id in Situation['id']]: Situation } | null
  goals: { [id in Goal['id']]: Goal } | null
  measures: { [id in Measure['id']]: Measure } | null
}

export interface Strategy {
  id: number
  user: number
  title: string
  description: string
  measures: Array<number> //Todo: should be blocks
  blocks: Array<number> //Todo: this is currently only mocked data
  is_published: boolean
  created: Date
  updated: Date
}

export interface Block {
  id: number
  pillar: number
  situations: Array<number> //Todo: this is currently only mocked data
  title: string
  description: string
  created: Date
  updated: Date
}

export interface Situation {
  id: number
  goals: Array<number> //Todo: this is currently only mocked data
  title: string
  description: string
  created: Date
  updated: Date
}

export interface Goal {
  id: number
  measures: Array<number> //Todo: this is currently only mocked data
  title: string
  description: string
  created: Date
  updated: Date
}

export interface Measure {
  id: number
  title: string
  description: string
  created: Date
  updated: Date
}

export type StrategyEntity = Strategy | Block | Situation | Goal | Measure
