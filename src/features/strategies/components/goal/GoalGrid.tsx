import React from 'react'
import { useSelector } from 'react-redux'
import { useGoalData } from 'features/strategies/components/hooks'
import { getGoals, Goal } from 'features/strategies/store'
import { OptionsGrid } from 'shared/components/options/OptionsGrid'
import { GoalCard } from './GoalCard'

export interface GoalGridProps {
  ids: Goal['id'][]
}

const GoalGrid = ({ ids }: GoalGridProps): JSX.Element => {
  useGoalData()
  const goals = useSelector(getGoals)
  if (!goals) return <div>No Goals could be found.</div>
  return (
    <OptionsGrid<Goal>
      dataset={goals}
      filter={goal => ids.includes(goal.id)}
      render={(_id, goal) => <GoalCard goal={goal} />}
    />
  )
}

export default GoalGrid
