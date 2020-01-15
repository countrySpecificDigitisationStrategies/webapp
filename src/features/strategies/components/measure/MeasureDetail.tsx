import React from 'react'
import { useSelector } from 'react-redux'
import { Typography } from '@material-ui/core'

import { getMeasure, getStrategy, getStrategyMeasureByRelated, Measure, Strategy } from 'features/strategies/store'
import { useMeasureData, useStrategyData, useStrategyMeasureData } from 'features/strategies/components'
import { StandardView } from 'shared/components'

interface MeasureDetailProps {
  measureId: Measure['id']
  strategyId: Strategy['id']
}

const MeasureDetail = ({ measureId, strategyId }: MeasureDetailProps) => {
  useMeasureData()
  useStrategyData()
  useStrategyMeasureData()

  const measure = useSelector(getMeasure(measureId))
  const strategy = useSelector(getStrategy(strategyId))
  const strategyMeasure = useSelector(getStrategyMeasureByRelated(strategyId, measureId))

  if (!(measure && strategy && strategyMeasure))
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
    <>
      <StandardView
        title={measure.title}
        description={measure.description}
        renderAdditionalInfo={strategyMeasureFragment}
      />
    </>
  )
}

export default MeasureDetail
