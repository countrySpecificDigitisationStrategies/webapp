export const mapResponseToBuildingBlock = (response: BuildingBlockResponse): BuildingBlockModel => {
  return {
    id: response.id,
    title: response.title,
    description: response.description,
  }
}

export interface BuildingBlockResponse {
  id: number
  title: string
  description: string
}

export interface BuildingBlockModel {
  id: number
  title: string
  description: string
}
