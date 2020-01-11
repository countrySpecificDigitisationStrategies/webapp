import React from 'react'
import { useParams } from 'react-router-dom'
import { GoalDetail } from 'features/strategies/components'

const Goal = () => {
  const { goalId } = useParams()
  return goalId ? <GoalDetail id={+goalId} /> : null
}

export default Goal
