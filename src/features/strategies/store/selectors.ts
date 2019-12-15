import {
  BLOCKS_REQUEST_ID,
  GOALS_REQUEST_ID,
  MEASURES_REQUEST_ID,
  STRATEGIES_REQUEST_ID,
} from 'features/strategies/store/actions'
import { doesRequestExist } from 'features/requests/store'
import { SITUATIONS_REQUEST_ID } from 'features/strategies/store/actions.situations'

const slice = 'strategies'

const getAll = <T>(key: string) => <T>(state): T[] | null | undefined => state[slice][key]
const getOne = <T>(getAll: <T>(string) => object, id) => (state): T | null => (getAll(state) ? getAll(state)[id] : null)
const isLoaded = (requestId: string) => (state): boolean => doesRequestExist(requestId)(state)

export const getStrategies = getAll('strategies')
export const getStrategy = id => getOne(getStrategies, id)
export const areStrategiesLoaded = isLoaded(STRATEGIES_REQUEST_ID)

export const getBlocks = getAll('blocks')
export const getBlock = id => getOne(getBlocks, id)
export const areBlocksLoaded = isLoaded(BLOCKS_REQUEST_ID)

export const getSituations = getAll('situations')
export const getSituation = id => getOne(getSituations, id)
export const areSituationsLoaded = isLoaded(SITUATIONS_REQUEST_ID)

export const getGoals = getAll('goals')
export const getGoal = id => getOne(getGoals, id)
export const areGoalsLoaded = isLoaded(GOALS_REQUEST_ID)

export const getMeasures = getAll('measures')
export const getMeasure = id => getOne(getMeasures, id)
export const areMeasuresLoaded = isLoaded(MEASURES_REQUEST_ID)
