const slice = 'strategies'

export const getLoadingState = state => state[slice].loading
export const getError = state => state[slice].error
export const getData = state => state[slice].data
