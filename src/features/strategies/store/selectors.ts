import { BLOCKS_REQUEST_ID, STRATEGIES_REQUEST_ID } from 'features/strategies/store/actions'
import { doesRequestExist } from 'features/requests/store'
import { SITUATIONS_REQUEST_ID } from 'features/strategies/store/actions.situations'

const slice = 'strategies'

export const getStrategies = state => state[slice].strategies
export const getStrategy = id => state => (getStrategies(state) ? getStrategies(state)[id] : null)
export const areStrategiesLoaded = state => doesRequestExist(STRATEGIES_REQUEST_ID)(state)

export const getBlocks = state => state[slice].blocks
export const getBlock = id => state => (getBlocks(state) ? getBlocks(state)[id] : null)
export const areBlocksLoaded = state => doesRequestExist(BLOCKS_REQUEST_ID)(state)

export const getSituations = state => state[slice].blocks
export const getSituation = id => state => (getSituations(state) ? getSituations(state)[id] : null)
export const areSituationsLoaded = state => doesRequestExist(SITUATIONS_REQUEST_ID)(state)
