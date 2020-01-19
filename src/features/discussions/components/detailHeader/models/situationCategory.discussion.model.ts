export const mapResponseToSituationCategory = (response: SituationCategoryResponse): SituationCategoryModel => {
  return {
    id: response.id,
    title: response.title,
    description: response.description,
    goalTitle: response.goalTitle,
    goalDescription: response.goalDescription,
  }
}

export interface SituationCategoryResponse {
  id: number
  title: string
  description: string
  goalTitle: string
  goalDescription: string
}

export interface SituationCategoryModel {
  id: number
  title: string
  description: string
  goalTitle: string
  goalDescription: string
}
