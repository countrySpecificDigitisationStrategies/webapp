import { createRequest } from 'features/requests/store'
import { Endpoint, get, post } from 'app/service/api'
import { ThreadNewFormValues } from 'features/discussions/components/threads/ThreadNewForm'
import {
  mapResponseToPreviewThreads,
  PreviewThreadModel,
  PreviewThreadResponse,
  ThreadResponse,
} from '../models/thread.discussion.model'
import { AnswerFormValues } from 'features/discussions/components/thread/AnswerForm'
import { View } from 'shared/enums'
import { DiscussionDataActions } from './detail-data.actions'
import { TreeData } from '../../../shared/components/tree/tree.model'
import { mapDiscussionTreeResponseToTreeData, TreeResponse } from '../components/discussionsTree/discussionsTree.model'
import { getThreadEndpointForView } from '../components/discussionDetail'

export enum DiscussionActionTypes {
  DETAIL_VIEW_SET = 'discussion/detail-view/set',
  DATA_STRATEGY_ADD = 'discussion/data/strategy/add',
  DATA_BUILDING_BLOCK_ADD = 'discussion/data/building-block/add',
  DATA_SITUATION_CATEGORY_ADD = 'discussion/data/situation-category/add',
  DATA_SITUATION_ADD = 'discussion/data/situation/add',
  DATA_STRATEGY_MEASURE_ADD = 'discussion/data/strategy-measure/add',
  DATA_DISCUSSION_TREE_ADD = 'discussion/data/discussion-tree/add',
  DATA_DISCUSSION_PREVIEW_THREADS_ADD = 'discussion/data/preview-threads/add',
}

const THREAD_NEW_REQUEST_ID = 'thread-new'
const NEW_COMMENT_REQUEST_ID = 'comment-new'

export interface DiscussionDetailViewSet {
  type: string
  payload: {
    view: View
    viewId: number
  }
}

export type DiscussionActions =
  | DiscussionDetailViewSet
  | DiscussionDataActions
  | DiscussionTreeDataAdd
  | DiscussionPreviewThreadsDataAdd

export const setDiscussionDetailView = (view: View, viewId: number) => ({
  type: DiscussionActionTypes.DETAIL_VIEW_SET,
  payload: {
    view,
    viewId,
  },
})

export interface DiscussionTreeDataAdd {
  type: string
  payload: {
    id: string
    data: TreeData
  }
}

export const loadDiscussionTreeData = (strategyId: string) => {
  const request = () => get(Endpoint.strategies, { post: `${strategyId}/discussion_tree` })
  const onSuccess = (response: TreeResponse): DiscussionTreeDataAdd => ({
    type: DiscussionActionTypes.DATA_DISCUSSION_TREE_ADD,
    payload: {
      id: strategyId,
      data: mapDiscussionTreeResponseToTreeData(response),
    },
  })
  return createRequest({ id: strategyId, request, onSuccess })
}

export interface DiscussionPreviewThreadsDataAdd {
  type: string
  payload: {
    id: string
    data: PreviewThreadModel[]
  }
}

const getQueryParams = (view: View, strategyId: number, contentId: number | undefined): string => {
  switch (view) {
    case View.Strategy:
      return `?strategy=${strategyId}`
    case View.BuildingBlock:
      return `?strategy=${strategyId}&buiding_block=${contentId}`
    case View.SituationCategory:
      return `?strategy=${strategyId}&situation_category=${contentId}`
    case View.Situation:
      return `?strategy=${strategyId}&situation=${contentId}`
    case View.StrategyMeasure:
      return `?strategy_measure=${contentId}`
    default:
      return ''
  }
}

export const loadDiscussionPreviewThreadsData = (view: View, strategyId: number, contentId: number | undefined) => {
  const endpoint = getThreadEndpointForView(view)
  const options = {
    queryParams: getQueryParams(view, strategyId, contentId),
  }
  const id = contentId ? `${strategyId}-${view}-${contentId}` : `${strategyId}-${view}`
  const request = () => get(endpoint, options)
  const onSuccess = (response: PreviewThreadResponse[]): DiscussionPreviewThreadsDataAdd => ({
    type: DiscussionActionTypes.DATA_DISCUSSION_PREVIEW_THREADS_ADD,
    payload: {
      id,
      data: mapResponseToPreviewThreads(response),
    },
  })
  return createRequest({ id, request, onSuccess })
}

const buildRequestDataForNewThread = (
  strategy: string | undefined,
  endpoint: Endpoint,
  viewId: number | null,
  values: ThreadNewFormValues
): object => {
  const data = {
    ...values,
  }

  const dataWithStrategy = {
    ...data,
    strategy,
  }

  switch (endpoint) {
    case Endpoint.buildingBlockThreads:
      return {
        ...dataWithStrategy,
        buildingBlock: viewId,
      }
    case Endpoint.situationCategoryThreads:
      return {
        ...dataWithStrategy,
        situationCategory: viewId,
      }
    case Endpoint.situationThreads:
      return {
        ...dataWithStrategy,
        situation: viewId,
      }
    case Endpoint.strategyMeasureThreads:
      return {
        ...data,
        strategyMeasure: viewId,
      }
    default:
      // default is strategy
      return {
        ...dataWithStrategy,
      }
  }
}

export const submitNewThread = (
  strategy: string | undefined,
  endpoint: Endpoint,
  viewId: number | null,
  values: ThreadNewFormValues
) => {
  const data = buildRequestDataForNewThread(strategy, endpoint, viewId, values)

  return createRequest<ThreadResponse>({
    id: THREAD_NEW_REQUEST_ID,
    request: () => post(endpoint, data),
  })
}

const buildRequestDataForNewComment = (endpoint: Endpoint, threadId: string | undefined, values: AnswerFormValues) => {
  const data = {
    ...values,
  }

  switch (endpoint) {
    case Endpoint.buildingBlockComments:
      return {
        ...data,
        buildingBlockThread: threadId,
      }
    case Endpoint.situationCategoryComments:
      return {
        ...data,
        situationCategoryThread: threadId,
      }
    case Endpoint.situationComments:
      return {
        ...data,
        situationThread: threadId,
      }
    case Endpoint.strategyMeasureComments:
      return {
        ...data,
        strategyMeasureThread: threadId,
      }
    default:
      // default is strategy
      return {
        ...data,
        strategyThread: threadId,
      }
  }
}

export const submitNewComment = (
  endpoint: Endpoint,
  threadId: string | undefined,
  values: AnswerFormValues,
  parent?: number
) => {
  const data = buildRequestDataForNewComment(endpoint, threadId, values)

  let dataWithParent = null

  if (parent) {
    dataWithParent = { ...data, parent }
  }

  const dataToSubmit = dataWithParent ? dataWithParent : data

  return createRequest({
    id: NEW_COMMENT_REQUEST_ID,
    request: () => post(endpoint, dataToSubmit),
  })
}
