import { createRequest } from 'features/requests/store'
import { DiscussionDetailView } from 'features/discussions/components/discussionDetail'
import { post, Endpoint } from 'app/service/api'
import { ThreadNewFormValues } from 'features/discussions/components/threads/ThreadNewForm'
import { ThreadResponse } from '../models/thread.discussion.model'

export const DISCUSSION_DETAIL_VIEW_SET = 'discussion-detail-view/set'
export const THREAD_NEW_REQUEST_ID = 'thread-new'

interface DiscussionDetailViewSet {
  type: typeof DISCUSSION_DETAIL_VIEW_SET
  payload: {
    view: DiscussionDetailView
    viewId: number
  }
}

export type DiscussionActionTypes = DiscussionDetailViewSet

export const setDiscussionDetailView = (view: DiscussionDetailView, viewId: number) => ({
  type: DISCUSSION_DETAIL_VIEW_SET,
  payload: {
    view,
    viewId,
  },
})

const buildRequestDataObjectForNewThread = (
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
  const data = buildRequestDataObjectForNewThread(strategy, endpoint, viewId, values)

  return createRequest<ThreadResponse>({
    id: THREAD_NEW_REQUEST_ID,
    request: () => post(endpoint, data),
  })
}
