import { mapResponseToUser, UserModel, UserResponse } from './user.discussion.model'
import { CommentModel, CommentResponse, mapResponseToComment } from './comment.discussion.model'

export const mapResponseToPreviewThreads = (response: PreviewThreadResponse[]): PreviewThreadModel[] => {
  return response.map(
    (thread: PreviewThreadResponse): PreviewThreadModel => ({
      id: thread.id,
      title: thread.title,
      description: thread.description,
      user: mapResponseToUser(thread.user),
      commentCount: thread.commentCount,
      created: new Date(thread.created),
    })
  )
}

export interface PreviewThreadResponse {
  id: number
  title: string
  description: string
  user: UserResponse
  commentCount: number
  created: string
}

export interface PreviewThreadModel {
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
    updated: new Date(response.updated),
    comments: response.comments.map((comment: CommentResponse): CommentModel => mapResponseToComment(comment)),
  }
}

export interface ThreadResponse {
  id: number
  title: string
  description: string
  user: UserResponse
  created: string
  updated: string
  comments: CommentResponse[]
}

export interface ThreadModel {
  id: number
  title: string
  description: string
  user: UserModel
  created: Date
  updated: Date
  comments: CommentModel[]
}

export const buildThreadPostRequest = (thread: NewThreadModel, strategyMeasureId: number): ThreadPostRequestModel => {
  return {
    title: thread.title,
    description: thread.description,
    strategyMeasureId: strategyMeasureId,
  }
}

interface NewThreadModel {
  title: string
  description: string
}

interface ThreadPostRequestModel {
  title: string
  description: string
  strategyMeasureId: number
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
