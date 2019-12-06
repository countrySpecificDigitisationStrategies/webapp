import { useDispatch, useSelector } from 'react-redux'
import { areBlocksLoaded, areSituationsLoaded, areStrategiesLoaded, loadBlocks, loadStrategies } from '../store'
import { useEffect } from 'react'
import { loadSituations } from 'features/strategies/store/actions.situations'

const loadIfNotLoaded = (selector, requestActionCreator) => {
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
