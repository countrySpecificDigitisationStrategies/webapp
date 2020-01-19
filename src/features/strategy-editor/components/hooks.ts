import { useDispatch, useSelector } from 'react-redux'

import { setFields, StrategyDraft } from '../store'
import { useStrategyData, getStrategy, StrategyMeasure } from 'features/strategies'
import { setMeasures } from 'features/strategy-editor/store/actions'
import { getStrategyMeasures } from 'features/strategies/store/selectors'
import { useEffect } from 'react'
import { useStrategyMeasureData } from 'features/strategies/components'

export const useSetInitialStrategyEditorValues = (strategyId: StrategyDraft['id']) => {
  useStrategyData()
  useStrategyMeasureData()
  const strategy = useSelector(getStrategy(strategyId || NaN))
  const allStrategyMeasures = useSelector(getStrategyMeasures)
  const dispatch = useDispatch()

  useEffect(() => {
    if (strategyId && strategy) {
      const { id, title, description, strategyMeasures, isPublished } = strategy
      const measuresOnThisStrategy = strategyMeasures
        .map(id => allStrategyMeasures?.[id])
        .filter((item): item is StrategyMeasure => item !== undefined)

      dispatch(setFields({ id, title, description, isPublished }))
      dispatch(setMeasures(measuresOnThisStrategy))
    }
  }, [strategy])
}
