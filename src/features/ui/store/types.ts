export interface UiState {
  isNavBarOpen: boolean
  error: null | UiError
  isLoading: boolean
  //TODO: isLoading should probably be an array of process Ids
  // to keep track of multiple processes/requests across the app
}

export interface UiError {
  title: string
  message: string
}
