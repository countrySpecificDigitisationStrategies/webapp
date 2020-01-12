import React from 'react'
import { useParams } from 'react-router-dom'
import { GoalDetail } from 'features/strategies/components'
import { APP_ROUTE_PARAMS } from 'app/routes'

const Goal = () => {
  const { [APP_ROUTE_PARAMS.goalId]: goalId } = useParams<typeof APP_ROUTE_PARAMS>()
  return goalId ? <GoalDetail id={+goalId} /> : null
}

export default Goal
