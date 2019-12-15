export interface UiState {
  isNavBarOpen: boolean
  error: null | UiError
}

export interface UiError {
  title: string
  message: string
}
