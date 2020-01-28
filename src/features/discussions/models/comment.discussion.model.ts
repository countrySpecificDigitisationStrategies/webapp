import { mapResponseToUser, UserModel, UserResponse } from './user.discussion.model'

export const mapResponseToComment = (response: CommentResponse): CommentModel => {
  return {
    id: response.id,
    description: response.description,
    parent: response.parent,
    user: mapResponseToUser(response.user),
    created: new Date(response.created),
  }
}

export interface CommentResponse {
  id: number
  description: string
  parent: number | null
  user: UserResponse
  created: string
}

export interface CommentModel {
  id: number
  description: string
  parent: number | null
  user: UserModel
  created: Date
}

export const buildCommentPostRequest = (comment: NewCommentModel, threadId: number): CommentPostRequestModel => {
  return {
    description: comment.description,
    parent: comment.parent,
    // eslint-disable-next-line @typescript-eslint/camelcase
    threadId: threadId,
  }
}

interface NewCommentModel {
  description: string
  parent: number | null
}

interface CommentPostRequestModel {
  description: string
  parent: number | null
  threadId: number
}

export const buildCommentPatchRequest = (comment: CommentModel): CommentPatchRequestModel => {
  return {
    description: comment.description,
  }
}

interface CommentPatchRequestModel {
  description: string
}
