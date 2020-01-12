import React from 'react'
import { useSelector } from 'react-redux'
import { getMeasure, Measure } from 'features/strategies/store'
import { useMeasureData } from 'features/strategies/components/hooks'
import { StandardView } from 'shared/components'

interface MeasureDetailProps {
  id: Measure['id']
}

const MeasureDetail = ({ id }: MeasureDetailProps) => {
  useMeasureData()
  const measure = useSelector(getMeasure(id))
  if (!measure) return <div>Could not find Measure with id {id}</div>

  //TODO: Add StrategyMeasure-Relation-Data
  return <StandardView title={measure.title} description={measure.description} />
}

export default MeasureDetail
