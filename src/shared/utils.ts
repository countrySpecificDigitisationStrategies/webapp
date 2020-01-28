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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sortByProperty = <T extends object>(items: T[], getPropertyFn: (item: T) => any): T[] => {
  return items.sort((itemA, itemB) => {
    const a = getPropertyFn(itemA) || Infinity // undefined will come last
    const b = getPropertyFn(itemB) || Infinity

    if (a < b) return -1
    if (a > b) return 1
    else return 0
  })
}

export const flatten = <T = unknown>(array: T[][]): T[] => ([] as T[]).concat(...array)
