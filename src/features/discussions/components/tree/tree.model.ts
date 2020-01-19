export const mapResponseToTree = (response: TreeResponse): TreeModel => {
  return {
    buildingBlocks: response.building_blocks.map(
      (buildingBlock: TreeBuildingBlockResponse): TreeBuildingBlockModel => ({
        id: buildingBlock.id,
        title: buildingBlock.title,
        situationCategories: buildingBlock.situation_categories.map(
          (situationCategory: TreeSituationCategoryResponse): TreeSituationCategoryModel => ({
            id: situationCategory.id,
            title: situationCategory.title,
            situations: situationCategory.situations.map(
              (situation: TreeSituationResponse): TreeSituationModel => ({
                id: situation.id,
                title: situation.title,
                strategyMeasures: situation.strategy_measures.map(
                  (strategyMeasure: TreeStrategyMeasureResponse): TreeStrategyMeasureModel => {
                    return {
                      id: strategyMeasure.id,
                      title: strategyMeasure.measure.title,
                      threadCount: strategyMeasure.thread_count,
                    }
                  }
                ),
                threadCount: calculateSituationThreadCount(situation),
              })
            ),
            threadCount: calculateSituationCategoryThreadCount(situationCategory),
          })
        ),
        threadCount: calculateBuildingBlockThreadCount(buildingBlock),
      })
    ),
  }
}

const calculateTreeThreadCount = (tree: TreeResponse): number => {
  const sumUpBuildingBlockThreads = (sum: number, buildingBlock: TreeBuildingBlockResponse): number =>
    sum + calculateBuildingBlockThreadCount(buildingBlock)
  return tree.building_blocks.reduce(sumUpBuildingBlockThreads, 0) // TODO change 0 to response.thread_count if backend returns it
}

const calculateBuildingBlockThreadCount = (buildingBlock: TreeBuildingBlockResponse): number => {
  const sumUpSituationCategoryThreads = (sum: number, situationCategory: TreeSituationCategoryResponse): number =>
    sum + calculateSituationCategoryThreadCount(situationCategory)
  return buildingBlock.situation_categories.reduce(sumUpSituationCategoryThreads, buildingBlock.thread_count)
}

const calculateSituationCategoryThreadCount = (situationCategory: TreeSituationCategoryResponse): number => {
  const sumUpSituationThreads = (sum: number, situation: TreeSituationResponse): number =>
    sum + calculateSituationThreadCount(situation)
  return situationCategory.situations.reduce(sumUpSituationThreads, situationCategory.thread_count)
}

const calculateSituationThreadCount = (situation: TreeSituationResponse): number => {
  const sumUpStrategyMeasureThreads = (sum: number, strategyMeasure: TreeStrategyMeasureResponse): number =>
    sum + strategyMeasure.thread_count
  return situation.strategy_measures.reduce(sumUpStrategyMeasureThreads, situation.thread_count)
}

export interface TreeResponse {
  // TODO add strategy title and thread count if backend returns it
  building_blocks: TreeBuildingBlockResponse[]
}

export interface TreeModel {
  buildingBlocks: TreeBuildingBlockModel[]
}

interface TreeBuildingBlockResponse {
  id: number
  title: string
  situation_categories: TreeSituationCategoryResponse[]
  thread_count: number
}

export interface TreeBuildingBlockModel {
  id: number
  title: string
  situationCategories: TreeSituationCategoryModel[]
  threadCount: number
}

interface TreeSituationCategoryResponse {
  id: number
  title: string
  situations: TreeSituationResponse[]
  thread_count: number
}

export interface TreeSituationCategoryModel {
  id: number
  title: string
  situations: TreeSituationModel[]
  threadCount: number
}

interface TreeSituationResponse {
  id: number
  title: string
  strategy_measures: TreeStrategyMeasureResponse[]
  thread_count: number
}

export interface TreeSituationModel {
  id: number
  title: string
  strategyMeasures: TreeStrategyMeasureModel[]
  threadCount: number
}

interface TreeStrategyMeasureResponse {
  id: number
  measure: TreeMeasureResponse
  thread_count: number
}

interface TreeMeasureResponse {
  title: string
}

export interface TreeStrategyMeasureModel {
  id: number
  title: string
  threadCount: number
}
