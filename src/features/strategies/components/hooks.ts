import { loadIfNotLoaded } from 'features/requests'

import {
  loadBlocks,
  loadCategories,
  loadMeasures,
  loadSituations,
  loadStrategies,
  loadStrategyMeasures,
} from '../store'

export const useStrategyData = () => loadIfNotLoaded(loadStrategies)
export const useBlockData = () => loadIfNotLoaded(loadBlocks)
export const useSituationData = () => loadIfNotLoaded(loadSituations)
export const useCategoryData = () => loadIfNotLoaded(loadCategories)
export const useMeasureData = () => loadIfNotLoaded(loadMeasures)
export const useStrategyMeasureData = () => loadIfNotLoaded(loadStrategyMeasures)
