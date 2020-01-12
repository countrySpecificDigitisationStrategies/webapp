import { Country, Strategy, User } from './types'
import { Endpoint, get } from 'app/service'
import { createRequest } from 'features/requests/store'
import { CountryResponse, StrategyResponse, UserResponse } from 'features/strategies/store/types.api'

export const STRATEGIES_REQUEST_ID = 'strategies'
export const STRATEGIES_ADD = 'strategies/add'

interface StrategiesAdd {
  type: typeof STRATEGIES_ADD
  strategies: Strategy[]
}

export type StrategyActions = StrategiesAdd

/** Strategies Actions */
export const loadStrategies = () =>
  createRequest<StrategyResponse[]>({
    id: STRATEGIES_REQUEST_ID,
    request: () => get(Endpoint.strategies),
    onSuccess: data => addStrategies(transformResponseData(data)),
  })

const addStrategies = (strategies: Strategy[]): StrategiesAdd => ({
  type: STRATEGIES_ADD,
  strategies,
})

const transformResponseData = (strategies: StrategyResponse[]): Strategy[] => {
  return strategies.map(({ user, country, buildingBlocks, situationCategories, created, updated, ...strategy }) => ({
    ...strategy,
    user: transformUserData(user),
    country: transformCountryData(country),
    blocks: buildingBlocks,
    categories: situationCategories,
    created: new Date(created),
    updated: new Date(updated),
  }))
}

// TODO: should be defined elsewhere
const transformUserData = ({
  firstname,
  lastname,
  country,
  currentCountry,
  created,
  updated,
  ...user
}: UserResponse): User => {
  return {
    ...user,
    firstName: firstname,
    lastName: lastname,
    country: country ? transformCountryData(country) : null,
    currentCountry: currentCountry ? transformCountryData(currentCountry) : null,
    created: new Date(created),
    updated: new Date(updated),
  }
}

// TODO: should be defined elsewhere
const transformCountryData = ({ created, updated, ...country }: CountryResponse): Country => {
  return {
    ...country,
    created: new Date(created),
    updated: new Date(updated),
  }
}
