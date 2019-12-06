import { STRATEGIES_REQUEST_ID } from 'features/strategies/store/actions'
import { doesRequestExist } from 'features/requests/store'

const slice = 'strategies'

export const getStrategies = state => state[slice].data
export const getStrategy = id => state => (getStrategies(state) ? getStrategies(state)[id] : null)
export const areStrategiesLoaded = state => doesRequestExist(STRATEGIES_REQUEST_ID)(state)
