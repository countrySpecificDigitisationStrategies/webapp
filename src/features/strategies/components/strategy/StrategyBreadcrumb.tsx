import React from 'react'
import { RouteComponentProps } from 'react-router'
import { useSelector } from 'react-redux'
import { useStrategyData } from 'features/strategies/components/hooks'
import { Strategy, getStrategy } from 'features/strategies/store'

export const StrategyBreadcrumb = ({ match }: RouteComponentProps) => {
  const { strategyId } = match.params
  useStrategyData()
  const strategy: Strategy = useSelector(getStrategy(strategyId))
  return <>{strategy ? strategy.title : strategyId}</>
}
