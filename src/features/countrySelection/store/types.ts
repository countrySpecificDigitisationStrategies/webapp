export interface Country {
  id: string
  name: string
  flagRectangleURL: string
  flagCircleURL: string
  isDevelopingCountry: boolean
  strategyId: string
}

export interface CountryResponseItem {
  id: string
  flag_circle: string
  flag_rectangle: string
  name: string
  is_developing_country: boolean
  strategy: string
}

export interface CountriesState {
  selected: Country | null
  countries: Country[]
}
