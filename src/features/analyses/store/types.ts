export interface AnalysesState {
  analyses: { [id in Analysis['id']]: Analysis } | null
}

export interface Analysis {
  id: number
  country: Country
  title: string
  description: string
}

// This just exists so TS doesn't complain about missing fields on country
export interface Country {
  name: string
  flagRectangle: string
}
