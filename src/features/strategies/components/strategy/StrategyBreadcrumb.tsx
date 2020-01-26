import React from 'react'
import { RouteComponentProps } from 'react-router'
import { useSelector } from 'react-redux'
import { useStrategyData } from 'features/strategies/components/hooks'
import { getStrategy } from 'features/strategies/store'

export const StrategyBreadcrumb = ({ match }: RouteComponentProps<{ strategyId: string }>) => {
  const { strategyId } = match.params
  useStrategyData()
  const strategy = useSelector(getStrategy(+strategyId))
  return <>{strategy ? strategy.country.name : strategyId}</>
}
