import { Measure } from './types'
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
  createRequest({
    id: MEASURES_REQUEST_ID,
    request: () => get(Endpoint.measures),
    onSuccess: addMeasures,
  })

const addMeasures = (measures: Measure[]): MeasuresAdd => ({
  type: MEASURES_ADD,
  measures,
})
