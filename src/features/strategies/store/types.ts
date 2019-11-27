export enum loadingState {
  none = 'NONE',
  pending = 'PENDING',
  done = 'DONE',
  failed = 'FAILED',
}

export interface StrategiesState {
  loading: loadingState
  error?: object
  data: { [key: Strategy.id]: Strategy }
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
