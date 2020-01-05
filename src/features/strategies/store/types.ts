export interface StrategiesState {
  strategies: { [key: Strategy.id]: Strategy } | null
  blocks: { [key: Block.id]: Block } | null
  situations: { [key: Situations.id]: Situations } | null
  goals: { [key: Goals.id]: Goals } | null
  measures: { [key: Measures.id]: Measures } | null
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
  situations: Array<Situations> //Todo: this is currently only mocked data
  title: string
  description: string
  created: Date
  updated: Date
}

export interface Situations {
  id: number
  goals: Array<Goals> //Todo: this is currently only mocked data
  title: string
  description: string
  created: Date
  updated: Date
}

export interface Goals {
  id: number
  measures: Array<Measures> //Todo: this is currently only mocked data
  title: string
  description: string
  created: Date
  updated: Date
}

export interface Measures {
  id: number
  title: string
  description: string
  created: Date
  updated: Date
}
