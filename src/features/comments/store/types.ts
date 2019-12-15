export interface Comments {
  id: number
  user: number
  title: string
  parent: number
  description: string
  measures: Array<number>
  created: Date
  updated: Date
}

export interface CommentsState {
  error?: object
  data: { [key: Comments.id]: Comments }
}
