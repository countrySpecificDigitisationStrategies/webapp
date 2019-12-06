import { Situation } from './types'
import { Endpoints, get } from 'app/service'
import { createRequest } from 'features/requests/store'

export const SITUATIONS_REQUEST_ID = 'situations'
export const SITUATIONS_ADD = 'situations/add'

interface SituationsAdd {
  type: typeof SITUATIONS_ADD
  situations: Situation[]
}

export type SituationActions = SituationsAdd

export const loadSituations = () =>
  createRequest({
    id: SITUATIONS_REQUEST_ID,
    request: () => get(Endpoints.situations),
    onSuccess: addSituations,
  })

const addSituations = (situations: Situation[]): SituationsSuccess => ({
  type: SITUATIONS_ADD,
  situations,
})
