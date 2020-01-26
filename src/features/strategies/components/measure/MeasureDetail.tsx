import React from 'react'
import { useSelector } from 'react-redux'

import { getMeasure, Measure } from 'features/strategies/store'
import { useMeasureData } from 'features/strategies/components'
import { StandardView } from 'shared/components'

interface MeasureDetailProps {
  id: Measure['id']
  renderAdditionalInfo?: () => JSX.Element
}

const MeasureDetail = ({ id, renderAdditionalInfo }: MeasureDetailProps) => {
  useMeasureData()
  const measure = useSelector(getMeasure(id))
  if (!measure) return <div>Could not find Measure with id {id}</div>

  return (
    <>
      <StandardView
        title={measure.title}
        description={measure.description}
        renderAdditionalInfo={renderAdditionalInfo}
      />
    </>
  )
}

export default MeasureDetail
