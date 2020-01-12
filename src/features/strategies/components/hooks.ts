import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import {
  areBlocksLoaded,
  areCategoriesLoaded,
  areMeasuresLoaded,
  areSituationsLoaded,
  areStrategiesLoaded,
  areStrategyMeasuresLoaded,
  loadBlocks,
  loadCategories,
  loadMeasures,
  loadSituations,
  loadStrategies,
  loadStrategyMeasures,
  StrategyEntity,
} from '../store'
import { ApplicationState } from 'app/store/reducers'
import { CreateRequestReturnType } from 'features/requests/store'

const loadIfNotLoaded = <T extends StrategyEntity[]>(
  selector: (state: ApplicationState) => boolean,
  requestActionCreator: () => CreateRequestReturnType<T>
) => {
  const alreadyLoaded = useSelector(selector)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!alreadyLoaded) {
      dispatch(requestActionCreator())
    }
  }, [])
}

export const useStrategyData = () => loadIfNotLoaded(areStrategiesLoaded, loadStrategies)
export const useBlockData = () => loadIfNotLoaded(areBlocksLoaded, loadBlocks)
export const useSituationData = () => loadIfNotLoaded(areSituationsLoaded, loadSituations)
export const useCategoryData = () => loadIfNotLoaded(areCategoriesLoaded, loadCategories)
export const useMeasureData = () => loadIfNotLoaded(areMeasuresLoaded, loadMeasures)
export const useStrategyMeasureData = () => loadIfNotLoaded(areStrategyMeasuresLoaded, loadStrategyMeasures)
