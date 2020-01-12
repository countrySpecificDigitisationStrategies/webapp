export const mapResponseToSituationCategory = (response: SituationCategoryResponse): SituationCategoryModel => {
  return {
    id: response.id,
    title: response.title,
    description: response.description,
    goalTitle: response.goal_title,
    goalDescription: response.goal_description,
  }
}

export interface SituationCategoryResponse {
  id: number
  title: string
  description: string
  goal_title: string
  goal_description: string
}

export interface SituationCategoryModel {
  id: number
  title: string
  description: string
  goalTitle: string
  goalDescription: string
}
