import { ApplicationState } from 'app/store/reducers'
import { Analysis, AnalysesState } from 'features/analyses/store/types'
import { Country } from 'features/countries/store'

const getAnalysesState = (state: ApplicationState): AnalysesState => state['analyses']

export const getAnalyses = (state: ApplicationState) => getAnalysesState(state).analyses
export const getAnalysis = (id: Analysis['id']) => (state: ApplicationState) => getAnalyses(state)?.[id]
export const getAnalysisByCountryId = (countryId: Country['id']) => (state: ApplicationState) => {
  const all = getAnalyses(state) || {}
  return Object.values(all).find(analysis => analysis.country.id === countryId)
}
