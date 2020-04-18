import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { View } from '../../../shared/enums'
import {
  loadDiscussionBuildingBlockData,
  loadDiscussionSituationCategoryData,
  loadDiscussionSituationData,
  loadDiscussionStrategyData,
  loadDiscussionStrategyMeasureData,
} from './detail-data.actions'
import { loadDiscussionPreviewThreadsData, loadDiscussionTreeData } from './actions'

export const useDiscussionTreeData = (strategyId: string) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadDiscussionTreeData(strategyId))
  }, [strategyId])
}

export const useDiscussionDetailData = (view: View, id: number) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let action: any
  const dataId = `${id}`
  switch (view) {
    case View.Strategy:
      action = loadDiscussionStrategyData(dataId)
      break
    case View.BuildingBlock:
      action = loadDiscussionBuildingBlockData(dataId)
      break
    case View.SituationCategory:
      action = loadDiscussionSituationCategoryData(dataId)
      break
    case View.Situation:
      action = loadDiscussionSituationData(dataId)
      break
    case View.StrategyMeasure:
      action = loadDiscussionStrategyMeasureData(dataId)
      break
    default:
      return
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(action)
  }, [id])
}

export const useDiscussionPreviewThreads = (view: View, strategyId: number, contentId: number | undefined) => {
  const dispatch = useDispatch()
  const action = loadDiscussionPreviewThreadsData(view, strategyId, contentId)

  useEffect(() => {
    dispatch(action)
  }, [view, strategyId, contentId])
}
