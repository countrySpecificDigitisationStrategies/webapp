import { View } from 'shared/enums'

export interface DiscussionsState {
  activeDiscussionView: View | null
  activeDiscussionViewId: number | null
}

export interface Thread {
  id: number
  title: string
  description: string
  user: number
  comment_count: number
}
