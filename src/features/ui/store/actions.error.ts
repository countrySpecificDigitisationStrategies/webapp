export const SHOW_ERROR = 'ui/error/show'
export const HIDE_ERROR = 'ui/error/hide'

interface ShowError {
  type: typeof SHOW_ERROR
}

interface HideError {
  type: typeof HIDE_ERROR
}

export type ErrorAction = ShowError | HideError

export const showError = ({ title, message }: UiError): ShowError => ({
  type: SHOW_ERROR,
  payload: { title, message },
})

export const hideError = (): HideError => ({
  type: HIDE_ERROR,
})
