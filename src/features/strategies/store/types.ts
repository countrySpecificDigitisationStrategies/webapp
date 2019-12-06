export interface StrategiesState {
  data: { [key: Strategy.id]: Strategy } | null
}

export interface Strategy {
  id: number
  user: number
  title: string
  description: string
  measures: Array<number>
  is_published: boolean
  created: Date
  updated: Date
}
