import React from 'react'
import { useStrategyData } from '../../strategies/components'
import { useSelector } from 'react-redux'
import { getStrategy } from '../../strategies/store'
import { RouteComponentProps } from 'react-router'

export const DiscussionBreadcrumb = ({ match }: RouteComponentProps<{ strategyId: string }>): JSX.Element => {
  const { strategyId } = match.params
  useStrategyData()
  const strategy = useSelector(getStrategy(+strategyId))
  return <>{strategy ? strategy.title : strategyId}</>
}
