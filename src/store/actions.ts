export const SAMPLE_ACTION = 'SAMPLE_ACTION'

export const sampleAction = (text: string): object => {
  return { type: SAMPLE_ACTION, text }
}
