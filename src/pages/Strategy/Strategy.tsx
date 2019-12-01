import React from 'react'
import { useParams } from 'react-router-dom'
import { StrategyDetail } from 'features/strategies'

const Strategy = () => {
  const { id } = useParams()
  return (
    <div className="strategy-detail-page">
      <StrategyDetail id={id} />
    </div>
  )
}

export default Strategy
