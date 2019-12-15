import React from 'react'
import { useSelector } from 'react-redux'
import { useMeasureData } from 'features/strategies/components/hooks'
import { getMeasures, StrategiesState, Measure } from 'features/strategies/store'
import { OptionsGrid } from 'shared/components/options/OptionsGrid'
import { MeasureCard } from './MeasureCard'

export interface MeasureGridProps {
  ids: Measure.id[]
}

const MeasureGrid = ({ ids }: MeasureGridProps): JSX.Element => {
  useMeasureData()
  const measures: StrategiesState.measures = useSelector(getMeasures)
  if (!measures) return <div>No Measures could be found.</div>
  return (
    <OptionsGrid
      dataset={measures}
      filter={measure => ids.includes(measure.id)}
      render={(id, measure) => <MeasureCard measure={measure} />}
    />
  )
}

export default MeasureGrid
