import React from 'react'
import { useSelector } from 'react-redux'

import { APP_ROUTE_PARAMS, APP_ROUTES } from 'app/routes'
import { CountryGrid, Country } from 'features/countries'

import { useStrategyData } from 'features/strategies/components/hooks'
import { getStrategies } from 'features/strategies/store'

interface StrategyGridProps {
  linkTo?: string
}

const defaultRoute = APP_ROUTES.strategy
const routeParam = APP_ROUTE_PARAMS.strategyId

const StrategyGrid = ({ linkTo = defaultRoute }: StrategyGridProps): JSX.Element => {
  useStrategyData()
  const strategies = Object.values(useSelector(getStrategies) || {})
  const countryIds = strategies.filter(strategy => strategy.isPublished).map(strategy => strategy.country.id)

  const getStrategyByCountryId = (countryId: Country['id']) =>
    strategies.find(strategy => strategy.country.id === countryId)

  const getStrategyRoute = (countryId: Country['id']) => {
    const strategyId = getStrategyByCountryId(countryId)?.id
    if (strategyId) return linkTo.replace(`:${routeParam}`, String(strategyId))
    else return ''
  }

  const getStrategyTitle = (countryId: Country['id']) => getStrategyByCountryId(countryId)?.title

  return (
    <CountryGrid
      ids={countryIds}
      cardLink={getStrategyRoute}
      cardTitle={getStrategyTitle}
      emptyMessage="Sorry, there are no Strategies yet."
    />
  )
}

export default StrategyGrid
