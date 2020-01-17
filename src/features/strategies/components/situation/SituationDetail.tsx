import React from 'react'
import { useSelector } from 'react-redux'
import { getSituation, Situation } from 'features/strategies/store'
import { MeasureGrid, useSituationData } from 'features/strategies/components'
import { StandardView } from 'shared/components'

interface SituationDetailProps {
  id: Situation['id']
  renderNextLevel?: boolean
}

const SituationDetail = ({ id, renderNextLevel = true }: SituationDetailProps) => {
  useSituationData()
  const situation = useSelector(getSituation(id))
  if (!situation) return <div>Could not find Situation with id {id}</div>

  const renderMeasureGrid = () => <MeasureGrid ids={situation.measures} />
  const viewProps = {
    title: situation.title,
    description: situation.description,
    ...(renderNextLevel && {
      nextLevel: {
        title: 'Measures',
        render: renderMeasureGrid,
      },
    }),
  }

  return <StandardView {...viewProps} />
}

export default SituationDetail
