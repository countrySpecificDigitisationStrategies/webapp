export const mapResponseToSituation = (response: SituationResponse): SituationModel => {
  return {
    id: response.id,
    title: response.title,
    description: response.description,
  }
}

export interface SituationResponse {
  id: number
  title: string
  description: string
}

export interface SituationModel {
  id: number
  title: string
  description: string
}
