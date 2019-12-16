import { Situation } from './types'
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
  createRequest({
    id: SITUATIONS_REQUEST_ID,
    request: () => get(Endpoint.situations),
    onSuccess: addSituations,
  })

const addSituations = (situations: Situation[]): SituationsSuccess => ({
  type: SITUATIONS_ADD,
  // situations,
  situations: mockSituationData(situations),
})

//TODO: should be removed once api delivers real relation data
const mockSituationData = situations =>
  situations.map(situation => ({
    ...situation,
    title: situation.title.replace('BuildingBlock', 'Situation'),
    description: situation.description.replace('BuildingBlock', 'Situation'),
    goals: [1, 2, 3, 4],
  }))
