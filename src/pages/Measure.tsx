import React from 'react'
import { useParams } from 'react-router-dom'
import { StrategyMeasureDetail } from 'features/strategies/components'
import { APP_ROUTE_PARAMS } from 'app/routes'

const Measure = () => {
  const params = useParams<typeof APP_ROUTE_PARAMS>()
  const { [APP_ROUTE_PARAMS.strategyId]: strategyId, [APP_ROUTE_PARAMS.measureId]: measureId } = params

  return measureId ? <StrategyMeasureDetail strategyId={+strategyId} measureId={+measureId} /> : null
}

export default Measure
