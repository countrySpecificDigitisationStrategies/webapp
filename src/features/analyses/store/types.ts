import { Country } from 'features/countries/store'

export interface AnalysesState {
  analyses: { [id in Analysis['id']]: Analysis } | null
}

export interface Analysis {
  id: number
  country: Country
  title: string
  description: string
}
