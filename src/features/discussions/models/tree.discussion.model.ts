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
                  (strategyMeasure: TreeStrategyMeasureResponse): TreeStrategyMeasureModel => ({
                    id: strategyMeasure.id,
                    title: strategyMeasure.measure.title,
                    threadCount: strategyMeasure.thread_count,
                  })
                ),
              })
            ),
          })
        ),
      })
    ),
  }
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

interface TreeBuildingBlockModel {
  id: number
  title: string
  situationCategories: TreeSituationCategoryModel[]
}

interface TreeSituationCategoryResponse {
  id: number
  title: string
  situations: TreeSituationResponse[]
}

interface TreeSituationCategoryModel {
  id: number
  title: string
  situations: TreeSituationModel[]
}

interface TreeSituationResponse {
  id: number
  title: string
  strategy_measures: TreeStrategyMeasureResponse[]
}

interface TreeSituationModel {
  id: number
  title: string
  strategyMeasures: TreeStrategyMeasureModel[]
}

interface TreeStrategyMeasureResponse {
  id: number
  measure: TreeMeasureResponse
  thread_count: number
}

interface TreeMeasureResponse {
  title: string
}

interface TreeStrategyMeasureModel {
  id: number
  title: string
  threadCount: number
}
