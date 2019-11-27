export const toIndexedObject = (array: object[], index) =>
  array.reduce((acc, curr) => {
    acc[curr[index]] = curr
    return acc
  }, {})
