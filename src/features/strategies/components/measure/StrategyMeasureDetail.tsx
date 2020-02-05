import React from 'react'
import { useSelector } from 'react-redux'
import { Typography } from '@material-ui/core'

import { getMeasure, getStrategy, getStrategyMeasureByRelated, Measure, Strategy } from 'features/strategies/store'
import {
  EntityDetailView,
  EntityType,
  useMeasureData,
  useStrategyData,
  useStrategyMeasureData,
} from 'features/strategies/components'

interface StrategyMeasureDetailProps {
  measureId: Measure['id']
  strategyId: Strategy['id']
}

const StrategyMeasureDetail = ({ measureId, strategyId }: StrategyMeasureDetailProps) => {
  useStrategyData()
  useMeasureData()
  useStrategyMeasureData()

  const strategy = useSelector(getStrategy(strategyId))
  const measure = useSelector(getMeasure(measureId))
  const strategyMeasure = useSelector(getStrategyMeasureByRelated(strategyId, measureId))

  if (!(strategy && strategyMeasure && measure))
    return (
      <div>
        Could not find Measure with id {measureId} on Strategy with id {strategyId}
      </div>
    )

  const strategyMeasureFragment = () => (
    <>
      <Typography variant="h5">Notes on this Strategy</Typography>
      <Typography variant="body1">{strategyMeasure.description}</Typography>
    </>
  )

  return (
    <EntityDetailView
      entityType={EntityType.Measure}
      entityId={strategyMeasure.id}
      strategyId={strategyId}
      title={measure.title}
      description={measure.description}
      renderInfo={strategyMeasureFragment}
    />
  )
}

export default StrategyMeasureDetail
