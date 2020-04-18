import { DiscussionsState } from './types'
import {
  DiscussionActions,
  DiscussionActionTypes,
  DiscussionDetailViewSet,
  DiscussionPreviewThreadsDataAdd,
  DiscussionTreeDataAdd,
} from './actions'
import {
  DiscussionBuildingBlockDataAdd,
  DiscussionSituationCategoryDataAdd,
  DiscussionSituationDataAdd,
  DiscussionStrategyDataAdd,
  DiscussionStrategyMeasureDataAdd,
} from './detail-data.actions'

const initialState: DiscussionsState = {
  activeDiscussionView: null,
  activeDiscussionViewId: null,
  strategies: null,
  buildingBlocks: null,
  situationCategories: null,
  situations: null,
  strategyMeasures: null,
  discussionTree: null,
  previewThreads: null,
}

export const discussionsReducer = (
  state: DiscussionsState = initialState,
  action: DiscussionActions
): DiscussionsState => {
  let payload
  switch (action.type) {
    case DiscussionActionTypes.DETAIL_VIEW_SET:
      payload = (action as DiscussionDetailViewSet).payload
      return {
        ...state,
        activeDiscussionView: payload.view,
        activeDiscussionViewId: payload.viewId,
      }
    case DiscussionActionTypes.DATA_STRATEGY_ADD:
      payload = (action as DiscussionStrategyDataAdd).payload
      return {
        ...state,
        strategies: {
          ...state.strategies,
          [payload.data.id]: payload.data,
        },
      }
    case DiscussionActionTypes.DATA_BUILDING_BLOCK_ADD:
      payload = (action as DiscussionBuildingBlockDataAdd).payload
      return {
        ...state,
        buildingBlocks: {
          ...state.buildingBlocks,
          [payload.data.id]: payload.data,
        },
      }
    case DiscussionActionTypes.DATA_SITUATION_CATEGORY_ADD:
      payload = (action as DiscussionSituationCategoryDataAdd).payload
      return {
        ...state,
        situationCategories: {
          ...state.situationCategories,
          [payload.data.id]: payload.data,
        },
      }
    case DiscussionActionTypes.DATA_SITUATION_ADD:
      payload = (action as DiscussionSituationDataAdd).payload
      return {
        ...state,
        situations: {
          ...state.situations,
          [payload.data.id]: payload.data,
        },
      }
    case DiscussionActionTypes.DATA_STRATEGY_MEASURE_ADD:
      payload = (action as DiscussionStrategyMeasureDataAdd).payload
      return {
        ...state,
        strategyMeasures: {
          ...state.strategyMeasures,
          [payload.data.id]: payload.data,
        },
      }
    case DiscussionActionTypes.DATA_DISCUSSION_TREE_ADD:
      payload = (action as DiscussionTreeDataAdd).payload
      return {
        ...state,
        discussionTree: {
          ...state.discussionTree,
          [payload.id]: payload.data,
        },
      }
    case DiscussionActionTypes.DATA_DISCUSSION_PREVIEW_THREADS_ADD:
      payload = (action as DiscussionPreviewThreadsDataAdd).payload
      return {
        ...state,
        previewThreads: {
          ...state.previewThreads,
          [payload.id]: payload.data,
        },
      }
    default:
      return state
  }
}
