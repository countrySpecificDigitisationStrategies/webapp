export interface StrategiesState {
  strategies: { [id in Strategy['id']]: Strategy } | null
  blocks: { [id in Block['id']]: Block } | null
  categories: { [id in Category['id']]: Category } | null
  situations: { [id in Situation['id']]: Situation } | null
  measures: { [id in Measure['id']]: Measure } | null
  strategyMeasures: { [id in StrategyMeasure['id']]: StrategyMeasure } | null
}

export interface Strategy {
  id: number
  country: Country
  title: string
  description: string
  blocks: Block['id'][]
  categories: Category['id'][]
  situations: Situation['id'][]
  measures: Measure['id'][]
  strategyMeasures: StrategyMeasure['id'][]
  isPublished: boolean
  created: Date
  updated: Date
}

//TODO: should be defined elsewhere
export interface User {
  id: number
  email: string
  country: Country | null
  firstName: string
  lastName: string
  currentCountry: Country | null
  isAdmin: boolean
  isRepresentative: boolean
  isModerator: boolean
  created: Date
  updated: Date
}

//TODO: should be defined elsewhere
export interface Country {
  id: number
  name: string
  flag: string
  flagCircle: string
  flagRectangle: string
  isDevelopingCountry: boolean
  strategy: number
  created: Date
  updated: Date
}

export interface Block {
  id: number
  categories: Category['id'][]
  title: string
  description: string
  created: Date
  updated: Date
}

export interface Category {
  id: number
  block: Block['id']
  title: string
  description: string
  goalTitle: string
  goalDescription: string
  situations: Situation['id'][]
  created: Date
  updated: Date
}

export interface Situation {
  id: number
  category: Category['id']
  title: string
  description: string
  measures: Measure['id'][]
  created: Date
  updated: Date
}

export interface Measure {
  id: number
  situation: Situation['id']
  title: string
  description: string
  created: Date
  updated: Date
}

/** Represents relation between Strategy and Measures */
export interface StrategyMeasure {
  id: number
  strategy: Strategy['id']
  measure: Measure['id']
  description: string
  created: Date
  updated: Date
}

export type StrategyEntity = Strategy | Block | Category | Situation | Measure | StrategyMeasure
