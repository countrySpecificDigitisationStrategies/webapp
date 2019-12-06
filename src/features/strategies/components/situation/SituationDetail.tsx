import React from 'react'
import { useSelector } from 'react-redux'
import { getSituation, Situation } from 'features/strategies/store'
import { useSituationData } from 'features/strategies/components/hooks'
import StandardView from 'shared/components/standard-view/StandardView'

interface SituationDetailProps {
  id: Situation.id
}

const SituationDetail = ({ id }: SituationDetailProps) => {
  useSituationData()
  const situation = useSelector(getSituation(id))
  if (!situation) return <div>Could not find Situation with id {id}</div>

  return <StandardView title={situation.title} description={situation.description} />
}

export default SituationDetail
