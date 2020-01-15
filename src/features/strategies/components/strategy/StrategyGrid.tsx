import React from 'react'
import { useSelector } from 'react-redux'
import { useStrategyData } from 'features/strategies/components/hooks'
import { getStrategies, Strategy } from 'features/strategies/store'
import { OptionsGrid } from 'shared/components'
import { StrategyCard } from 'features/strategies/components/strategy/StrategyCard'

const StrategyGrid = (): JSX.Element => {
  useStrategyData()
  const strategies = useSelector(getStrategies)
  if (!strategies) return <div>No Strategies could be found.</div>
  return <OptionsGrid<Strategy> dataset={strategies} render={(_id, strategy) => <StrategyCard strategy={strategy} />} />
}

export default StrategyGrid
