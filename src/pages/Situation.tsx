import React from 'react'
import { useParams } from 'react-router-dom'
import { SituationDetail } from 'features/strategies/components'
import { APP_ROUTE_PARAMS } from 'app/routes'

const Situation = () => {
  const { [APP_ROUTE_PARAMS.situationId]: situationId } = useParams<typeof APP_ROUTE_PARAMS>()
  return situationId ? <SituationDetail id={+situationId} /> : null
}

export default Situation
