import React from 'react'
import { useSelector } from 'react-redux'
import { useStrategyData } from './hooks'
import { getStrategies, StrategiesState } from '../store'
import { OptionsGrid } from 'shared/components/options/OptionsGrid'
import { StrategyCard } from './StrategyCard'

const StrategyGrid = (): JSX.Element => {
  useStrategyData()
  const strategies: StrategiesState.data = useSelector(getStrategies)
  if (!strategies) return <div>No Strategies could be found.</div>
  return <OptionsGrid dataset={strategies} render={(id, strategy) => <StrategyCard strategy={strategy} />} />
}

export default StrategyGrid
