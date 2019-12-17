import React from 'react'
import { RouteComponentProps } from 'react-router'
import { useSelector } from 'react-redux'
import { useGoalData } from 'features/strategies/components/hooks'
import { Goal, getGoal } from 'features/strategies/store'

export const GoalBreadcrumb = ({ match }: RouteComponentProps) => {
  const { goalId } = match.params
  useGoalData()
  const goal: Goal = useSelector(getGoal(goalId))
  return <>{goal ? goal.title : goalId}</>
}
