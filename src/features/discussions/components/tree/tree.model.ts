export const mapResponseToTree = (response: TreeResponse): TreeModel => {
  return {
    buildingBlocks: response.building_blocks.map(
      (buildingBlock: TreeBuildingBlockResponse): TreeBuildingBlockModel => ({
        id: buildingBlock.id,
        title: buildingBlock.title,
        situationCategories: buildingBlock.situationCategories.map(
          (situationCategory: TreeSituationCategoryResponse): TreeSituationCategoryModel => ({
            id: situationCategory.id,
            title: situationCategory.title,
            situations: situationCategory.situations.map(
              (situation: TreeSituationResponse): TreeSituationModel => ({
                id: situation.id,
                title: situation.title,
                strategyMeasures: situation.strategyMeasures.map(
                  (strategyMeasure: TreeStrategyMeasureResponse): TreeStrategyMeasureModel => {
                    return {
                      id: strategyMeasure.id,
                      title: strategyMeasure.measure.title,
                      threadCount: strategyMeasure.threadCount,
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
    threadCount: calculateTreeThreadCount(response),
  }
}

const calculateTreeThreadCount = (tree: TreeResponse): number => {
  const sumUpBuildingBlockThreads = (sum: number, buildingBlock: TreeBuildingBlockResponse): number =>
    sum + calculateBuildingBlockThreadCount(buildingBlock)
  return tree.buildingBlocks.reduce(sumUpBuildingBlockThreads, 0) // TODO change 0 to response.threadCount if backend returns it
}

const calculateBuildingBlockThreadCount = (buildingBlock: TreeBuildingBlockResponse): number => {
  const sumUpSituationCategoryThreads = (sum: number, situationCategory: TreeSituationCategoryResponse): number =>
    sum + calculateSituationCategoryThreadCount(situationCategory)
  return buildingBlock.situationCategories.reduce(sumUpSituationCategoryThreads, buildingBlock.threadCount)
}

const calculateSituationCategoryThreadCount = (situationCategory: TreeSituationCategoryResponse): number => {
  const sumUpSituationThreads = (sum: number, situation: TreeSituationResponse): number =>
    sum + calculateSituationThreadCount(situation)
  return situationCategory.situations.reduce(sumUpSituationThreads, situationCategory.threadCount)
}

const calculateSituationThreadCount = (situation: TreeSituationResponse): number => {
  const sumUpStrategyMeasureThreads = (sum: number, strategyMeasure: TreeStrategyMeasureResponse): number =>
    sum + strategyMeasure.threadCount
  return situation.strategyMeasures.reduce(sumUpStrategyMeasureThreads, situation.threadCount)
}

export interface TreeResponse {
  // TODO add strategy title and thread count if backend returns it
  buildingBlocks: TreeBuildingBlockResponse[]
}

export interface TreeModel {
  title: string
  buildingBlocks: TreeBuildingBlockModel[]
  threadCount: number
}

interface TreeBuildingBlockResponse {
  id: number
  title: string
  situationCategories: TreeSituationCategoryResponse[]
  threadCount: number
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
  threadCount: number
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
  strategyMeasures: TreeStrategyMeasureResponse[]
  threadCount: number
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
  threadCount: number
}

interface TreeMeasureResponse {
  title: string
}

export interface TreeStrategyMeasureModel {
  id: number
  title: string
  threadCount: number
}
