import { Situation } from './types'
import { SituationResponse } from './types.api'
import { Endpoint, get } from 'app/service'
import { createRequest } from 'features/requests/store'

export const SITUATIONS_REQUEST_ID = 'situations'
export const SITUATIONS_ADD = 'situations/add'

interface SituationsAdd {
  type: typeof SITUATIONS_ADD
  situations: Situation[]
}

export type SituationActions = SituationsAdd

export const loadSituations = () =>
  createRequest<SituationResponse[]>({
    id: SITUATIONS_REQUEST_ID,
    request: () => get(Endpoint.situations),
    onSuccess: data => addSituations(transformResponseData(data)),
  })

const addSituations = (situations: Situation[]): SituationsAdd => ({
  type: SITUATIONS_ADD,
  situations,
})

const transformResponseData = (situations: SituationResponse[]): Situation[] => {
  return situations.map(({ situationCategory, created, updated, ...situation }) => ({
    ...situation,
    category: situationCategory,
    created: new Date(created),
    updated: new Date(updated),
  }))
}
