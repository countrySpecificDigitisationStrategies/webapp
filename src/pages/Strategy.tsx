import React from 'react'
import { useParams } from 'react-router-dom'
import { StrategyDetail } from 'features/strategies'

const Strategy = () => {
  const { strategyId } = useParams()
  return <StrategyDetail id={strategyId} />
}

export default Strategy
