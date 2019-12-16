import React from 'react'
import { Goal } from 'features/strategies/store'
import { OptionsCard } from 'shared/components/options/OptionsCard'
import { useHistory } from 'react-router'

export interface GoalCardProps {
  goal: Goal
}

export const GoalCard = ({ goal }: GoalCardProps) => {
  const history = useHistory()
  return (
    <OptionsCard
      title={goal.title}
      overline="Goal"
      description={goal.description}
      link={{
        to: `${history.location.pathname}/${goal.id}`,
        title: 'View Goal',
      }}
    />
  )
}
