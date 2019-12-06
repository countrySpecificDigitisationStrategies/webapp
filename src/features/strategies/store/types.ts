export interface StrategiesState {
  strategies: { [key: Strategy.id]: Strategy } | null
  blocks: { [key: Block.id]: Block } | null
}

export interface Strategy {
  id: number
  user: number
  title: string
  description: string
  measures: Array<number> //Todo: should be blocks
  is_published: boolean
  created: Date
  updated: Date
}

export interface Block {
  id: number
  pillar: number
  title: string
  description: string
  created: Date
  updated: Date
}
