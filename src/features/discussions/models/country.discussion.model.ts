export const mapResponseToCountry = (response: CountryResponse): CountryModel => {
  return {
    id: response.id,
    name: response.name,
    flag: response.flag,
    flagRectangle: response.flag_rectangle,
  }
}

export interface CountryResponse {
  id: number
  name: string
  flag: string
  flag_rectangle: string
}

export interface CountryModel {
  id: number
  name: string
  flag: string
  flagRectangle: string
}
