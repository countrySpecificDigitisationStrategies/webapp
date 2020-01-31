import React from 'react'
import { useSelector } from 'react-redux'
import { useStrategyData } from 'features/strategies/components/hooks'
import { getStrategies } from 'features/strategies/store'
import { CountryGrid } from 'features/countries/components'
import { APP_ROUTE_PARAMS, APP_ROUTES } from 'app/routes'
import { Country } from 'features/countries/store'

interface StrategyGridProps {
  linkTo?: typeof APP_ROUTES.strategy | typeof APP_ROUTES.discussion
}

const StrategyGrid = ({ linkTo = APP_ROUTES.strategy }: StrategyGridProps): JSX.Element => {
  useStrategyData()
  const strategies = Object.values(useSelector(getStrategies) || {})
  const countryIds = strategies.filter(strategy => strategy.isPublished).map(strategy => strategy.country.id)

  const getStrategyByCountryId = (countryId: Country['id']) =>
    strategies.find(strategy => strategy.country.id === countryId)

  const getStrategyRoute = (countryId: Country['id']) => {
    const strategyId = getStrategyByCountryId(countryId)?.id
    if (strategyId) return linkTo.replace(`:${APP_ROUTE_PARAMS.strategyId}`, String(strategyId))
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
