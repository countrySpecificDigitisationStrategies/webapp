export const mapResponseToTree = (response: TreeResponse): TreeModel => {
  return {
    id: response.id,
    title: response.title,
    buildingBlocks: response.buildingBlocks
      .map(
        (buildingBlock: TreeBuildingBlockResponse): TreeBuildingBlockModel => ({
          id: buildingBlock.id,
          title: buildingBlock.title,
          situationCategories: buildingBlock.situationCategories
            .map(
              (situationCategory: TreeSituationCategoryResponse): TreeSituationCategoryModel => ({
                id: situationCategory.id,
                title: situationCategory.title,
                situations: situationCategory.situations
                  .map(
                    (situation: TreeSituationResponse): TreeSituationModel => ({
                      id: situation.id,
                      title: situation.title,
                      strategyMeasures: situation.strategyMeasures
                        .map(
                          (strategyMeasure: TreeStrategyMeasureResponse): TreeStrategyMeasureModel => {
                            return {
                              id: strategyMeasure.id,
                              title: strategyMeasure.measure.title,
                              threadCount: strategyMeasure.threadCount,
                            }
                          }
                        )
                        .sort(compareByTitle),
                      threadCount: calculateSituationThreadCount(situation),
                    })
                  )
                  .sort(compareByTitle),
                threadCount: calculateSituationCategoryThreadCount(situationCategory),
              })
            )
            .sort(compareByTitle),
          threadCount: calculateBuildingBlockThreadCount(buildingBlock),
        })
      )
      .sort(compareByTitle),
    threadCount: calculateTreeThreadCount(response),
  }
}

const compareByTitle = <T extends { title: string }>(a: T, b: T): number => {
  const numerationA = a.title.substring(0, a.title.indexOf(' '))
  const numerationB = b.title.substring(0, b.title.indexOf(' '))
  if (numerationA < numerationB) return -1
  if (numerationA > numerationB) return 1
  return 0
}

const calculateTreeThreadCount = (tree: TreeResponse): number => {
  const sumUpBuildingBlockThreads = (sum: number, buildingBlock: TreeBuildingBlockResponse): number =>
    sum + calculateBuildingBlockThreadCount(buildingBlock)
  return tree.buildingBlocks.reduce(sumUpBuildingBlockThreads, tree.threadCount)
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
  id: number
  title: string
  buildingBlocks: TreeBuildingBlockResponse[]
  threadCount: number
}

export interface TreeModel {
  id: number
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
