import { TreeBranch, TreeData, TreeRootData } from '../../../../shared/components/tree/tree.model'
import { compareByNumerationInTitle } from '../../../../shared/components/tree/treeNodeSort.utils'

export const mapDiscussionTreeResponseToTreeData = (response: TreeResponse): TreeData => {
  const rootData: TreeRootData = {
    text: response.title,
    info: calculateTreeThreadCount(response),
  }

  const branches: TreeBranch[] = response.buildingBlocks
    .map(
      (buildingBlock: TreeBuildingBlockResponse): TreeBranch => ({
        id: buildingBlock.id,
        text: buildingBlock.title,
        children: buildingBlock.situationCategories
          .map(
            (situationCategory: TreeSituationCategoryResponse): TreeBranch => ({
              id: situationCategory.id,
              text: situationCategory.title,
              children: situationCategory.situations
                .map(
                  (situation: TreeSituationResponse): TreeBranch => ({
                    id: situation.id,
                    text: situation.title,
                    children: situation.strategyMeasures
                      .map(
                        (strategyMeasure: TreeStrategyMeasureResponse): TreeBranch => ({
                          id: strategyMeasure.id,
                          text: strategyMeasure.measure.title,
                          info: strategyMeasure.threadCount,
                        })
                      )
                      .sort(compareByNumerationInTitle),
                    info: calculateSituationThreadCount(situation),
                  })
                )
                .sort(compareByNumerationInTitle),
              info: calculateSituationCategoryThreadCount(situationCategory),
            })
          )
          .sort(compareByNumerationInTitle),
        info: calculateBuildingBlockThreadCount(buildingBlock),
      })
    )
    .sort(compareByNumerationInTitle)

  return { rootData, branches }
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

interface TreeBuildingBlockResponse {
  id: number
  title: string
  situationCategories: TreeSituationCategoryResponse[]
  threadCount: number
}

interface TreeSituationCategoryResponse {
  id: number
  title: string
  situations: TreeSituationResponse[]
  threadCount: number
}

interface TreeSituationResponse {
  id: number
  title: string
  strategyMeasures: TreeStrategyMeasureResponse[]
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
