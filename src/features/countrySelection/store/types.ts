export interface Country {
  id: string
  name: string
  flagRectangleURL: string
  flagCircleURL: string
}

export interface CountryResponseItem {
  id: string
  flag_circle: string
  flag_rectangle: string
  name: string
}

export interface CountriesState {
  selected?: Country
  countries: Country[]
}
