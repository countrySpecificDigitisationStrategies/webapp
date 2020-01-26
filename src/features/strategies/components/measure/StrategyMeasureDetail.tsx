import React from 'react'
import { useSelector } from 'react-redux'
import { Typography } from '@material-ui/core'

import { getStrategy, getStrategyMeasureByRelated, Measure, Strategy } from 'features/strategies/store'
import { MeasureDetail, useStrategyData, useStrategyMeasureData } from 'features/strategies/components'

interface StrategyMeasureDetailProps {
  measureId: Measure['id']
  strategyId: Strategy['id']
}

const StrategyMeasureDetail = ({ measureId, strategyId }: StrategyMeasureDetailProps) => {
  useStrategyData()
  useStrategyMeasureData()

  const strategy = useSelector(getStrategy(strategyId))
  const strategyMeasure = useSelector(getStrategyMeasureByRelated(strategyId, measureId))

  if (!(strategy && strategyMeasure))
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

  return <MeasureDetail id={measureId} renderAdditionalInfo={strategyMeasureFragment} />
}

export default StrategyMeasureDetail
