import { Endpoint } from 'app/service'

import { View } from '.'

export const getEndpointForView = (view: View | null) => {
  switch (view) {
    case View.Strategy:
      return Endpoint.strategyThreads
    case View.BuildingBlock:
      return Endpoint.buildingBlockThreads
    case View.SituationCategory:
      return Endpoint.situationCategoryThreads
    case View.Situation:
      return Endpoint.situationThreads
    default:
      return Endpoint.strategyMeasureThreads
  }
}
