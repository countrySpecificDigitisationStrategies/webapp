import React from 'react'
import { useSelector } from 'react-redux'
import { getSituation, Situation } from 'features/strategies/store'
import { useSituationData } from 'features/strategies/components/hooks'
import StandardView from 'shared/components/standard-view/StandardView'
import GoalGrid from 'features/strategies/components/goal/GoalGrid'

interface SituationDetailProps {
  id: Situation.id
}

const SituationDetail = ({ id }: SituationDetailProps) => {
  useSituationData()
  const situation = useSelector(getSituation(id))
  if (!situation) return <div>Could not find Situation with id {id}</div>

  const renderGoalGrid = () => <GoalGrid ids={situation.blocks} />

  //TODO: presents mocked data
  return (
    <StandardView
      title={situation.title}
      description={situation.description}
      nextLevel={{
        title: 'Goals',
        render: renderGoalGrid,
      }}
    />
  )
}

export default SituationDetail
