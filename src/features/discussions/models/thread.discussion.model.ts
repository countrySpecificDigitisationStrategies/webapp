import { mapResponseToUser, UserModel, UserResponse } from './user.discussion.model'
import { CommentModel, CommentResponse, mapResponseToComment } from './comment.discussion.model'

export const mapResponseToPreviewThreads = (response: PreviewThreadResponse[]): PreviewThreadModel[] => {
  return response.map(
    (thread: PreviewThreadResponse): PreviewThreadModel => ({
      id: thread.id,
      title: thread.title,
      description: thread.description,
      user: mapResponseToUser(thread.user),
      commentCount: thread.comment_count,
      created: new Date(thread.created),
    })
  )
}

interface PreviewThreadResponse {
  id: number
  title: string
  description: string
  user: UserResponse
  comment_count: number
  created: string
}

interface PreviewThreadModel {
  id: number
  title: string
  description: string
  user: UserModel
  commentCount: number
  created: Date
}

export const mapResponseToThread = (response: ThreadResponse): ThreadModel => {
  return {
    id: response.id,
    title: response.title,
    description: response.description,
    user: mapResponseToUser(response.user),
    created: new Date(response.created),
    comments: response.comments.map((comment: CommentResponse): CommentModel => mapResponseToComment(comment)),
  }
}

interface ThreadResponse {
  id: number
  title: string
  description: string
  user: UserResponse
  created: string
  comments: CommentResponse[]
}

interface ThreadModel {
  id: number
  title: string
  description: string
  user: UserModel
  created: Date
  comments: CommentModel[]
}

export const buildThreadPostRequest = (thread: NewThreadModel, strategyMeasureId: number): ThreadPostRequestModel => {
  return {
    title: thread.title,
    description: thread.description,
    // eslint-disable-next-line @typescript-eslint/camelcase
    strategy_measure_id: strategyMeasureId,
  }
}

interface NewThreadModel {
  title: string
  description: string
}

interface ThreadPostRequestModel {
  title: string
  description: string
  strategy_measure_id: number
}

export const buildThreadPatchRequest = (thread: ThreadModel): ThreadPatchRequestModel => {
  return {
    title: thread.title,
    description: thread.description,
  }
}

interface ThreadPatchRequestModel {
  title: string
  description: string
}
