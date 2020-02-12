import { Endpoint } from 'app/service'

import { View } from '.'

export const getThreadEndpointForView = (view: View | null) => {
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

export const getCommentEndpointForView = (view: View | null) => {
  switch (view) {
    case View.Strategy:
      return Endpoint.strategyComments
    case View.BuildingBlock:
      return Endpoint.buildingBlockComments
    case View.SituationCategory:
      return Endpoint.situationCategoryComments
    case View.Situation:
      return Endpoint.situationComments
    default:
      return Endpoint.strategyMeasureComments
  }
}
