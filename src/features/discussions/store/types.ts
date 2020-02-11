import { DiscussionDetailView } from 'features/discussions/components/discussionDetail'

export interface DiscussionsState {
  activeDiscussionView: DiscussionDetailView | null
  activeDiscussionViewId: number | null
}

export interface Thread {
  id: number
  title: string
  description: string
  user: number
  comment_count: number
}
