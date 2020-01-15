import React from 'react'
import { useSelector } from 'react-redux'
import { getSituation, Situation } from 'features/strategies/store'
import { MeasureGrid, useSituationData } from 'features/strategies/components'
import { StandardView } from 'shared/components'

interface SituationDetailProps {
  id: Situation['id']
}

const SituationDetail = ({ id }: SituationDetailProps) => {
  useSituationData()
  const situation = useSelector(getSituation(id))
  if (!situation) return <div>Could not find Situation with id {id}</div>

  const renderMeasureGrid = () => <MeasureGrid ids={situation.measures} />
  return (
    <StandardView
      title={situation.title}
      description={situation.description}
      nextLevel={{
        title: 'Measures',
        render: renderMeasureGrid,
      }}
    />
  )
}

export default SituationDetail
