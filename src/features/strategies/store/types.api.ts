/**
 * These interfaces describe the response data's format, received from the endpoints of the API.
 */

export interface StrategyResponse {
  id: number
  user: UserResponse
  country: CountryResponse
  title: string
  description: string
  isPublished: boolean
  strategyMeasures: StrategyMeasureResponse['id'][]
  buildingBlocks: BlockResponse['id'][]
  situationCategories: CategoryResponse['id'][]
  situations: SituationResponse['id'][]
  measures: MeasureResponse['id'][]
  created: string
  updated: string
}

//TODO: should be defined elsewhere
export interface UserResponse {
  id: number
  email: string
  country: CountryResponse | null
  firstname: string
  lastname: string
  currentCountry: CountryResponse | null
  isAdmin: boolean
  isRepresentative: boolean
  isModerator: boolean
  created: string
  updated: string
}

//TODO: should be defined elsewhere
export interface CountryResponse {
  id: number
  name: string
  flag: string
  flagCircle: string
  flagRectangle: string
  isDevelopingCountry: boolean
  strategy: number
  created: string
  updated: string
}

export interface BlockResponse {
  id: number
  situationCategories: CategoryResponse['id'][]
  title: string
  description: string
  created: string
  updated: string
}

export interface CategoryResponse {
  id: number
  buildingBlock: BlockResponse['id']
  title: string
  description: string
  goalTitle: string
  goalDescription: string
  situations: SituationResponse['id'][]
  created: string
  updated: string
}

export interface SituationResponse {
  id: number
  situationCategory: CategoryResponse['id']
  title: string
  description: string
  measures: MeasureResponse['id'][]
  created: string
  updated: string
}

export interface MeasureResponse {
  id: number
  situation: SituationResponse['id']
  title: string
  description: string
  created: string
  updated: string
}

export interface StrategyMeasureResponse {
  id: number
  strategy: StrategyResponse['id']
  measure: MeasureResponse['id']
  description: string
  created: string
  updated: string
}

export type StrategyEntityResponse =
  | StrategyResponse
  | BlockResponse
  | CategoryResponse
  | SituationResponse
  | MeasureResponse
  | StrategyMeasureResponse
