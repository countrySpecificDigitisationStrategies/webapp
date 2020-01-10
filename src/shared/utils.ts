export const toIndexedObject = <T extends object>(array: T[], index: keyof T): { [key in keyof T]: T } =>
  array.reduce((acc, curr) => {
    acc[curr[index]] = curr
    return acc
  }, {} as { [key in keyof T]: T })

export const addToState = <T extends object>(state: T, key: keyof T, payload: object): T => ({
  ...state,
  [key]: {
    ...state[key],
    ...payload,
  },
})
