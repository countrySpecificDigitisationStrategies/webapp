import React from 'react'
import { useSelector } from 'react-redux'
import { Typography } from '@material-ui/core'

import { useMeasureData } from 'features/strategies/components/hooks'
import { Measure, getMeasure } from 'features/strategies/store'
import { Summary } from 'shared/components'

interface MeasureSummaryProps {
  id: Measure['id']
}

export const MeasureSummary = ({ id }: MeasureSummaryProps) => {
  useMeasureData()
  const measure = useSelector(getMeasure(id))
  if (!measure) return <div>Could not find Measure with id {id}</div>

  return (
    <>
      <Typography variant="h5">{measure.title}</Typography>
      <Summary text={measure.description} />
    </>
  )
}
