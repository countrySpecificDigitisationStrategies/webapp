// TODO: Fix typing for this function
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
type indexedObject<T> = { [index in T[keyof T]]: T }
export const toIndexedObject = <T extends object>(array: T[], index: keyof T): indexedObject<T> =>
  array.reduce((acc, curr) => {
    acc[curr[index]] = curr
    return acc
  }, {} as indexedObject<T>)

export const addToState = <T extends object>(state: T, key: keyof T, payload: object): T => ({
  ...state,
  [key]: {
    ...state[key],
    ...payload,
  },
})
