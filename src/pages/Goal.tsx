import React from 'react'
import { useParams } from 'react-router-dom'
import { GoalDetail } from 'features/strategies/components'

const Goal = () => {
  const { goalId } = useParams()
  return <GoalDetail id={goalId} />
}

export default Goal
