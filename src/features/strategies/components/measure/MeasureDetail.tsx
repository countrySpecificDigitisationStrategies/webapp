import React from 'react'
import { useSelector } from 'react-redux'

import { getMeasure, Measure } from 'features/strategies/store'
import { EntityDetailView, EntityType, useMeasureData } from 'features/strategies/components'

interface MeasureDetailProps {
  id: Measure['id']
}

const MeasureDetail = ({ id }: MeasureDetailProps) => {
  useMeasureData()
  const measure = useSelector(getMeasure(id))
  if (!measure) return <div>Could not find Measure with id {id}</div>
  return (
    <EntityDetailView
      entityType={EntityType.Measure}
      entityId={id}
      title={measure.title}
      description={measure.description}
    />
  )
}

export default MeasureDetail
