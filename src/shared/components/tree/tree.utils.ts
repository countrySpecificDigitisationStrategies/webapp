const getReferenceValueOfTitleNumeration = (text: string): string | number => {
  const numeration = text.substring(1, text.indexOf(' ')).split('.')
  const numerationDepth = numeration.length - 1
  if (numerationDepth === 3) {
    return numeration[numerationDepth]
  }
  return +numeration[numerationDepth]
}

export const compareByNumerationInTitle = <T extends { text: string }>(a: T, b: T): number => {
  const numerationA = getReferenceValueOfTitleNumeration(a.text)
  const numerationB = getReferenceValueOfTitleNumeration(b.text)
  if (numerationA < numerationB) return -1
  if (numerationA > numerationB) return 1
  return 0
}
