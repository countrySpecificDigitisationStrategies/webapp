export type CountriesState = {
  [id in Country['id']]: Country
}

export interface Country {
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
