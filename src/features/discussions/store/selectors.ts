import { ApplicationState } from 'app/store/reducers'
import { DiscussionsState } from 'features/discussions/store'

const getDiscussionsState = (state: ApplicationState): DiscussionsState => state['discussions']
export const getActiveDiscussionView = (state: ApplicationState) => getDiscussionsState(state).activeDiscussionView
export const getActiveDiscussionViewId = (state: ApplicationState) => getDiscussionsState(state).activeDiscussionViewId
