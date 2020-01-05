export interface AnalysesState {
  analyses: { [key: Analysis.id]: Analysis } | null
}

export interface Analysis {
  id: number
  country: number
  title: string
  description: string
}
