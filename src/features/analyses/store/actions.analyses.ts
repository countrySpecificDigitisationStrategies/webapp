import { Analysis } from './types'
import { Endpoints, get } from 'app/service'
import { createRequest } from 'features/requests/store'

export const ANALYSES_REQUEST_ID = 'analyses'
export const ANALYSES_ADD = 'analyses/add'

interface AnalysesAdd {
  type: typeof ANALYSES_ADD
  analyses: Analysis[]
}

export type AnalysesActions = AnalysesAdd

export const loadAnalyses = () =>
  createRequest({
    id: ANALYSES_REQUEST_ID,
    request: () => get(Endpoints.analyses),
    onSuccess: addAnalyses,
  })

const addAnalyses = (analyses: Analysis[]): AnalysesSuccess => ({
  type: ANALYSES_ADD,
  analyses: analyses,
})
