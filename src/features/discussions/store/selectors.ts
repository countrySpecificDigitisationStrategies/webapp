import { ApplicationState } from 'app/store/reducers'
import { DiscussionsState } from 'features/discussions/store'
import { View } from '../../../shared/enums'

const getDiscussionsState = (state: ApplicationState): DiscussionsState => state['discussions']
export const getActiveDiscussionView = (state: ApplicationState) => getDiscussionsState(state).activeDiscussionView
export const getActiveDiscussionViewId = (state: ApplicationState) => getDiscussionsState(state).activeDiscussionViewId

export const getDiscussionStrategyData = (strategyId: number) => (state: ApplicationState) =>
  getDiscussionsState(state).strategies?.[strategyId]

export const getDiscussionBuildingBlockData = (buildingBlockId: number) => (state: ApplicationState) =>
  getDiscussionsState(state).buildingBlocks?.[buildingBlockId]

export const getDiscussionSituationCategoryData = (situationCategoryId: number) => (state: ApplicationState) =>
  getDiscussionsState(state).situationCategories?.[situationCategoryId]

export const getDiscussionSituationData = (situationId: number) => (state: ApplicationState) =>
  getDiscussionsState(state).situations?.[situationId]

export const getDiscussionStrategyMeasureData = (strategyMeasureId: number) => (state: ApplicationState) =>
  getDiscussionsState(state).strategyMeasures?.[strategyMeasureId]

export const getDiscussionTreeData = (strategyId: string) => (state: ApplicationState) =>
  getDiscussionsState(state).discussionTree?.[strategyId]

export const getDiscussionPreviewThreadsData = (view: View, strategyId: number, contentId: number | undefined) => (
  state: ApplicationState
) =>
  getDiscussionsState(state).previewThreads?.[
    contentId ? `${strategyId}-${view}-${contentId}` : `${strategyId}-${view}`
  ]
