const slice = 'strategies'

export const getStrategies = state => state[slice].data
export const getStrategy = id => state => (getStrategies(state) ? getStrategies(state)[id] : null)
export const areStrategiesLoaded = state => getStrategies(state) !== null
