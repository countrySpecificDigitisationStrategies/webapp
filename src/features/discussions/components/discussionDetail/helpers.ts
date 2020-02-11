import { Endpoint } from 'app/service'

import { DiscussionDetailView } from '.'

export const getEndpointForDiscussionDetailView = (view: DiscussionDetailView | null) => {
  switch (view) {
    case DiscussionDetailView.Strategy:
      return Endpoint.strategyThreads
    case DiscussionDetailView.BuildingBlock:
      return Endpoint.buildingBlockThreads
    case DiscussionDetailView.SituationCategory:
      return Endpoint.situationCategoryThreads
    case DiscussionDetailView.Situation:
      return Endpoint.situationThreads
    default:
      return Endpoint.strategyMeasureThreads
  }
}
