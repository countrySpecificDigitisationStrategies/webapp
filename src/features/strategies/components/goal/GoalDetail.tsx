import React from 'react'
import { useSelector } from 'react-redux'
import { getGoal, Goal } from 'features/strategies/store'
import { useGoalData, MeasureGrid } from 'features/strategies/components'
import { StandardView } from 'shared/components'

interface GoalDetailProps {
  id: Goal['id']
}

const GoalDetail = ({ id }: GoalDetailProps) => {
  useGoalData()
  const goal = useSelector(getGoal(id))
  if (!goal) return <div>Could not find Goal with id {id}</div>

  const renderMeasureGrid = () => <MeasureGrid ids={goal.measures} />

  //TODO: presents mocked data
  return (
    <StandardView
      title={goal.title}
      description={goal.description}
      nextLevel={{
        title: 'Measures',
        render: renderMeasureGrid,
      }}
    />
  )
}

export default GoalDetail
