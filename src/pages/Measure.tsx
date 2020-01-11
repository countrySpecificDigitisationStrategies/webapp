import React from 'react'
import { useParams } from 'react-router-dom'
import { MeasureDetail } from 'features/strategies/components'

const Measure = () => {
  const { measureId } = useParams()
  return measureId ? <MeasureDetail id={+measureId} /> : null
}

export default Measure
