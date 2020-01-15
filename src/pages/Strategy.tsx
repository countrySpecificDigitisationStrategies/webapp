import React from 'react'
import { useParams } from 'react-router-dom'
import { StrategyDetail } from 'features/strategies'
import { APP_ROUTE_PARAMS } from 'app/routes'

const Strategy = () => {
  const { [APP_ROUTE_PARAMS.strategyId]: strategyId } = useParams<typeof APP_ROUTE_PARAMS>()
  return strategyId ? <StrategyDetail id={+strategyId} /> : null
}

export default Strategy
