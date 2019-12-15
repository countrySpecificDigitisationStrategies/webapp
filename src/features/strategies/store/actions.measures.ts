import { Measure } from './types'
import { Endpoints, get } from 'app/service'
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
    request: () => get(Endpoints.measures),
    onSuccess: addMeasures,
  })

const addMeasures = (measures: Measure[]): MeasuresSuccess => ({
  type: MEASURES_ADD,
  // measures,
  measures: mockMeasureData(measures),
})

//TODO: should be removed once api delivers real relation data
const mockMeasureData = measures =>
  measures.map(measure => ({
    ...measure,
    title: measure.title.replace('BuildingBlock', 'Measure'),
    description: measure.description.replace('BuildingBlock', 'Measure'),
  }))
