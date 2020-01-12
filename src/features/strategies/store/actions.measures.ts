import { Measure } from './types'
import { MeasureResponse } from './types.api'
import { Endpoint, get } from 'app/service'
import { createRequest } from 'features/requests/store'

export const MEASURES_REQUEST_ID = 'measures'
export const MEASURES_ADD = 'measures/add'

interface MeasuresAdd {
  type: typeof MEASURES_ADD
  measures: Measure[]
}

export type MeasureActions = MeasuresAdd

export const loadMeasures = () =>
  createRequest<MeasureResponse[]>({
    id: MEASURES_REQUEST_ID,
    request: () => get(Endpoint.measures),
    onSuccess: data => addMeasures(transformResponseData(data)),
  })

const addMeasures = (measures: Measure[]): MeasuresAdd => ({
  type: MEASURES_ADD,
  measures,
})

const transformResponseData = (measures: MeasureResponse[]): Measure[] => {
  return measures.map(({ created, updated, ...measure }) => ({
    ...measure,
    created: new Date(created),
    updated: new Date(updated),
  }))
}
