import React from 'react'
import { useParams } from 'react-router-dom'
import { SituationDetail } from 'features/strategies/components'

const Situation = () => {
  const { situationId } = useParams()
  return situationId ? <SituationDetail id={+situationId} /> : null
}

export default Situation
