import React from 'react'
import { useSelector } from 'react-redux'
import { useStrategyData } from 'features/strategies/components/hooks'
import { getStrategies, StrategiesState } from 'features/strategies/store'
import { OptionsGrid } from 'shared/components/options/OptionsGrid'
import { StrategyCard } from 'features/strategies/components/strategy/StrategyCard'

const StrategyGrid = (): JSX.Element => {
  useStrategyData()

  const strategies: StrategiesState.strategies = useSelector(getStrategies)
  if (!strategies) return <div>No Strategies could be found.</div>

  console.log(strategies)
  return <OptionsGrid dataset={strategies} render={(id, strategy) => <StrategyCard strategy={strategy} />} />
}

export default StrategyGrid
