import { View } from 'shared/enums'
import { StrategyModel } from '../components/detailHeader/models/strategy.discussion.model'
import { BuildingBlockModel } from '../components/detailHeader/models/buildingBlock.discussion.model'
import { SituationCategoryModel } from '../components/detailHeader/models/situationCategory.discussion.model'
import { SituationModel } from '../components/detailHeader/models/situation.discussion.model'
import { StrategyMeasureModel } from '../components/detailHeader/models/strategyMeasure.discussion.model'
import { TreeData } from '../../../shared/components/tree/tree.model'
import { PreviewThreadModel } from '../models/thread.discussion.model'

export interface DiscussionsState {
  activeDiscussionView: View | null
  activeDiscussionViewId: number | null
  strategies: {
    [key: number]: StrategyModel
  } | null
  buildingBlocks: {
    [key: number]: BuildingBlockModel
  } | null
  situationCategories: {
    [key: number]: SituationCategoryModel
  } | null
  situations: {
    [key: number]: SituationModel
  } | null
  strategyMeasures: {
    [key: number]: StrategyMeasureModel
  } | null
  discussionTree: {
    [key: string]: TreeData
  } | null
  previewThreads: {
    [key: string]: PreviewThreadModel[]
  } | null
}

export interface Thread {
  id: number
  title: string
  description: string
  user: number
  comment_count: number
}
