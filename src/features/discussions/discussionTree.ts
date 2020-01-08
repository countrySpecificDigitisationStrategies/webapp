export const createDiscussionTreeFromResponse = (response: DiscussionTreeResponse): DiscussionTreeModel => {
  return {
    buildingBlocks: response.building_blocks.map(
      (buildingBlockResponse: BuildingBlockResponse): BuildingBlockModel => ({
        id: buildingBlockResponse.id,
        title: buildingBlockResponse.title,
        description: buildingBlockResponse.description,
        situations: buildingBlockResponse.situations.map(
          (situationResponse: SituationResponse): SituationModel => ({
            id: situationResponse.id,
            title: situationResponse.title,
            description: situationResponse.description,
            goals: situationResponse.goals.map(
              (goalResponse: GoalResponse): GoalModel => ({
                id: goalResponse.id,
                title: goalResponse.title,
                description: goalResponse.description,
                strategyMeasures: goalResponse.strategy_measures.map(
                  (strategyMeasureResponse: StrategyMeasureResponse): StrategyMeasureModel => ({
                    id: strategyMeasureResponse.id,
                    description: strategyMeasureResponse.description,
                    threads: strategyMeasureResponse.threads.map(
                      (threadResponse: ThreadResponse): ThreadModel => ({
                        id: threadResponse.id,
                        title: threadResponse.title,
                        description: threadResponse.description,
                        user: {
                          id: threadResponse.user.id,
                          firstName: threadResponse.user.firstname,
                          lastName: threadResponse.user.lastname,
                          country: threadResponse.user.country,
                          isAdmin: threadResponse.user.is_admin,
                          isModerator: threadResponse.user.is_moderator,
                          isRepresentative: threadResponse.user.is_representative,
                        },
                        comments: threadResponse.comments.map(
                          (commentResponse: CommentResponse): CommentModel => ({
                            id: commentResponse.id,
                            description: commentResponse.description,
                            parent: commentResponse.parent,
                            user: {
                              id: commentResponse.user.id,
                              firstName: commentResponse.user.firstname,
                              lastName: commentResponse.user.lastname,
                              country: commentResponse.user.country,
                              isAdmin: commentResponse.user.is_admin,
                              isModerator: commentResponse.user.is_moderator,
                              isRepresentative: commentResponse.user.is_representative,
                            },
                          })
                        ),
                      })
                    ),
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

export interface DiscussionTreeResponse {
  building_blocks: BuildingBlockResponse[]
}

export interface DiscussionTreeModel {
  buildingBlocks: BuildingBlockModel[]
}

interface BuildingBlockResponse {
  id: number
  title: string
  description: string
  situations: SituationResponse[]
}

export interface BuildingBlockModel {
  id: number
  title: string
  description: string
  situations: SituationModel[]
}

interface SituationResponse {
  id: number
  title: string
  description: string
  goals: GoalResponse[]
}

export interface SituationModel {
  id: number
  title: string
  description: string
  goals: GoalModel[]
}

interface GoalResponse {
  id: number
  title: string
  description: string
  strategy_measures: StrategyMeasureResponse[]
}

export interface GoalModel {
  id: number
  title: string
  description: string
  strategyMeasures: StrategyMeasureModel[]
}

interface StrategyMeasureResponse {
  //TODO title is missing
  id: number
  description: string
  threads: ThreadResponse[]
}

export interface StrategyMeasureModel {
  id: number
  description: string
  threads: ThreadModel[]
}

interface ThreadResponse {
  id: number
  user: UserResponse
  title: string
  description: string
  comments: CommentResponse[]
}

export interface ThreadModel {
  id: number
  user: UserModel
  title: string
  description: string
  comments: CommentModel[]
}

interface UserResponse {
  id: number
  country: any // TODO country object
  firstname: string
  lastname: string
  is_admin: boolean
  is_representative: boolean
  is_moderator: boolean
}

export interface UserModel {
  id: number
  country: any // TODO country object
  firstName: string
  lastName: string
  isAdmin: boolean
  isRepresentative: boolean
  isModerator: boolean
}

interface CommentResponse {
  id: number
  user: UserResponse
  parent: number | null
  description: string
}

export interface CommentModel {
  id: number
  user: UserModel
  parent: number | null
  description: string
}
