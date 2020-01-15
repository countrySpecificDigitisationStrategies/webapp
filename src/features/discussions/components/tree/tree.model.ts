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

const calculateBuildingBlockThreadCount = (buildingBlock: TreeBuildingBlockResponse): number => {
  const sumUpSituationCategoryThread = (sum: number, situationCategory: TreeSituationCategoryResponse): number =>
    sum + calculateSituationCategoryThreadCount(situationCategory)
  return buildingBlock.situation_categories.reduce(sumUpSituationCategoryThread, 0)
}

const calculateSituationCategoryThreadCount = (situationCategory: TreeSituationCategoryResponse): number => {
  const sumUpSituationThreads = (sum: number, situation: TreeSituationResponse): number =>
    sum + calculateSituationThreadCount(situation)
  return situationCategory.situations.reduce(sumUpSituationThreads, 0)
}

const calculateSituationThreadCount = (situation: TreeSituationResponse): number => {
  const sumUpStrategyMeasureThreads = (sum: number, strategyMeasure: TreeStrategyMeasureResponse): number =>
    sum + strategyMeasure.thread_count
  return situation.strategy_measures.reduce(sumUpStrategyMeasureThreads, 0)
}

export interface TreeResponse {
  building_blocks: TreeBuildingBlockResponse[]
}

export interface TreeModel {
  buildingBlocks: TreeBuildingBlockModel[]
}

interface TreeBuildingBlockResponse {
  id: number
  title: string
  situation_categories: TreeSituationCategoryResponse[]
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
