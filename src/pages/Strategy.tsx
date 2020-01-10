import React from 'react'
import { useParams } from 'react-router-dom'
import { StrategyDetail } from 'features/strategies'

const Strategy = () => {
  const { strategyId } = useParams()
  return strategyId ? <StrategyDetail id={+strategyId} /> : null
}

export default Strategy
