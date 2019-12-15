import React from 'react'
import { useParams } from 'react-router-dom'
import { MeasureDetail } from 'features/strategies/components'

const Measure = () => {
  const { measureId } = useParams()
  return <MeasureDetail id={measureId} />
}

export default Measure
