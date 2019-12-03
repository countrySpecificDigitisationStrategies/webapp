export interface Country {
  id: string
  name: string
  flagRectangleURL: string
  flagCircleURL: string
}

export interface CountriesState {
  selected?: Country
  countries: Country[]
}
