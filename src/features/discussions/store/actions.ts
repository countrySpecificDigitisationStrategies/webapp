import { createRequest } from 'features/requests/store'
import { post, Endpoint } from 'app/service/api'
import { ThreadNewFormValues } from 'features/discussions/components/threads/ThreadNewForm'
import { ThreadResponse } from '../models/thread.discussion.model'
import { AnswerFormValues } from 'features/discussions/components/thread/AnswerForm'
import { View } from 'shared/enums'

export const DISCUSSION_DETAIL_VIEW_SET = 'discussion-detail-view/set'
export const THREAD_NEW_REQUEST_ID = 'thread-new'
export const NEW_COMMENT_REQUEST_ID = 'comment-new'

interface DiscussionDetailViewSet {
  type: typeof DISCUSSION_DETAIL_VIEW_SET
  payload: {
    view: View
    viewId: number
  }
}

export type DiscussionActionTypes = DiscussionDetailViewSet

export const setDiscussionDetailView = (view: View, viewId: number) => ({
  type: DISCUSSION_DETAIL_VIEW_SET,
  payload: {
    view,
    viewId,
  },
})

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
