import {
  mapResponseToStrategy,
  StrategyModel,
  StrategyResponse,
} from '../components/detailHeader/models/strategy.discussion.model'
import {
  BuildingBlockModel,
  mapResponseToBuildingBlock,
} from '../components/detailHeader/models/buildingBlock.discussion.model'
import { Endpoint, get } from '../../../app/service'
import { createRequest } from '../../requests/store'
import { DiscussionActionTypes } from './actions'
import {
  mapResponseToStrategyMeasure,
  StrategyMeasureModel,
  StrategyMeasureResponse,
} from '../components/detailHeader/models/strategyMeasure.discussion.model'
import {
  mapResponseToSituationCategory,
  SituationCategoryModel,
  SituationCategoryResponse,
} from '../components/detailHeader/models/situationCategory.discussion.model'
import {
  mapResponseToSituation,
  SituationModel,
  SituationResponse,
} from '../components/detailHeader/models/situation.discussion.model'

export type DiscussionDataActions =
  | DiscussionStrategyDataAdd
  | DiscussionBuildingBlockDataAdd
  | DiscussionStrategyMeasureDataAdd

interface DiscussionDataAction {
  type: string
}

export interface DiscussionStrategyDataAdd extends DiscussionDataAction {
  payload: {
    data: StrategyModel
  }
}

export interface DiscussionBuildingBlockDataAdd extends DiscussionDataAction {
  payload: {
    data: BuildingBlockModel
  }
}

export interface DiscussionSituationCategoryDataAdd extends DiscussionDataAction {
  payload: {
    data: SituationCategoryModel
  }
}

export interface DiscussionSituationDataAdd extends DiscussionDataAction {
  payload: {
    data: SituationModel
  }
}

export interface DiscussionStrategyMeasureDataAdd extends DiscussionDataAction {
  payload: {
    data: StrategyMeasureModel
  }
}

export const loadDiscussionStrategyData = (id: string) => {
  const request = () => get(Endpoint.strategies, { post: id })
  const onSuccess = (response: StrategyResponse): DiscussionStrategyDataAdd => ({
    type: DiscussionActionTypes.DATA_STRATEGY_ADD,
    payload: {
      data: mapResponseToStrategy(response),
    },
  })
  return createRequest({ id, request, onSuccess })
}

export const loadDiscussionBuildingBlockData = (id: string) => {
  const request = () => get(Endpoint.blocks, { post: id })
  const onSuccess = (response: StrategyResponse): DiscussionBuildingBlockDataAdd => ({
    type: DiscussionActionTypes.DATA_BUILDING_BLOCK_ADD,
    payload: {
      data: mapResponseToBuildingBlock(response),
    },
  })
  return createRequest({ id, request, onSuccess })
}

export const loadDiscussionSituationCategoryData = (id: string) => {
  const request = () => get(Endpoint.situationCategories, { post: id })
  const onSuccess = (response: SituationCategoryResponse): DiscussionSituationCategoryDataAdd => ({
    type: DiscussionActionTypes.DATA_SITUATION_CATEGORY_ADD,
    payload: {
      data: mapResponseToSituationCategory(response),
    },
  })
  return createRequest({ id, request, onSuccess })
}

export const loadDiscussionSituationData = (id: string) => {
  const request = () => get(Endpoint.situations, { post: id })
  const onSuccess = (response: SituationResponse): DiscussionSituationDataAdd => ({
    type: DiscussionActionTypes.DATA_SITUATION_ADD,
    payload: {
      data: mapResponseToSituation(response),
    },
  })
  return createRequest({ id, request, onSuccess })
}

export const loadDiscussionStrategyMeasureData = (id: string) => {
  const request = () => get(Endpoint.strategyMeasures, { post: `${id}?type=discussion` })
  const onSuccess = (response: StrategyMeasureResponse): DiscussionStrategyMeasureDataAdd => ({
    type: DiscussionActionTypes.DATA_STRATEGY_MEASURE_ADD,
    payload: {
      data: mapResponseToStrategyMeasure(response),
    },
  })
  return createRequest({ id, request, onSuccess })
}
