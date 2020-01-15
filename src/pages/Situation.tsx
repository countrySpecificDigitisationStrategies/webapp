import React from 'react'
import { useParams } from 'react-router-dom'
import { SituationDetail } from 'features/strategies/components'
import { APP_ROUTE_PARAMS } from 'app/routes'

const Situation = () => {
  const params = useParams<typeof APP_ROUTE_PARAMS>()
  const { [APP_ROUTE_PARAMS.strategyId]: strategyId, [APP_ROUTE_PARAMS.situationId]: situationId } = params

  return situationId ? <SituationDetail strategyId={+strategyId} situationId={+situationId} /> : null
}

export default Situation
