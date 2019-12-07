export const toIndexedObject = (array: object[], index) =>
  array.reduce((acc, curr) => {
    acc[curr[index]] = curr
    return acc
  }, {})

export const addToState = <T>(state: T, key: string, payload: object): T => ({
  ...state,
  [key]: {
    ...state[key],
    ...payload,
  },
})
