import React from 'react'
import { useParams } from 'react-router-dom'
import { MeasureDetail } from 'features/strategies/components'
import { APP_ROUTE_PARAMS } from 'app/routes'

const Measure = () => {
  const { [APP_ROUTE_PARAMS.measureId]: measureId } = useParams<typeof APP_ROUTE_PARAMS>()
  return measureId ? <MeasureDetail id={+measureId} /> : null
}

export default Measure
