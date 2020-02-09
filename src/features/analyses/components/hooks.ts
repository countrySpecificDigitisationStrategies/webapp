import { loadAnalyses } from '../store'
import { loadIfNotLoaded } from 'features/requests'

export const useAnalysesData = () => loadIfNotLoaded(loadAnalyses)
