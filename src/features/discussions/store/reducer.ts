import { DiscussionsState } from './types'
import { DISCUSSION_DETAIL_VIEW_SET, DiscussionActionTypes } from './actions'

const initialState: DiscussionsState = {
  activeDiscussionView: null,
  activeDiscussionViewId: null,
}

export const discussionsReducer = (
  state: DiscussionsState = initialState,
  action: DiscussionActionTypes
): DiscussionsState => {
  switch (action.type) {
    case DISCUSSION_DETAIL_VIEW_SET:
      return {
        ...state,
        activeDiscussionView: action.payload.view,
        activeDiscussionViewId: action.payload.viewId,
      }
    default:
      return state
  }
}
