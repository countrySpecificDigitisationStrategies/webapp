import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  useStrategyData,
  useStrategyMeasureData,
  getStrategy,
  StrategyMeasure,
  getStrategyMeasures,
} from 'features/strategies'

import { setFields, setMeasures, StrategyDraft, isSubmittingStrategy } from '../store'

export const useSetInitialStrategyEditorValues = (strategyId: StrategyDraft['id']) => {
  const dispatch = useDispatch()

  useStrategyData()
  useStrategyMeasureData()
  const strategy = useSelector(getStrategy(strategyId || NaN))
  const allStrategyMeasures = useSelector(getStrategyMeasures)
  const isSubmitting = useSelector(isSubmittingStrategy)

  useEffect(() => {
    if (isSubmitting) return // do not update while submitting

    if (strategyId && strategy) {
      const { id, title, description, strategyMeasures, isPublished } = strategy
      const measuresOnThisStrategy = strategyMeasures
        .map(id => allStrategyMeasures?.[id])
        .filter((item): item is StrategyMeasure => item !== undefined)

      dispatch(setFields({ id, title, description, isPublished }))
      dispatch(setMeasures(measuresOnThisStrategy))
    } else {
      dispatch(setFields({ title: '', description: '', isPublished: false }))
      dispatch(setMeasures([]))
    }
  }, [strategy])
}
