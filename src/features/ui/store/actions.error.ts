import { UiError } from './types'

export const SHOW_ERROR = 'ui/error/show'
export const HIDE_ERROR = 'ui/error/hide'

interface ShowError {
  type: typeof SHOW_ERROR
  payload: UiError
}

interface HideError {
  type: typeof HIDE_ERROR
}

export type ErrorActions = ShowError | HideError

export const showError = ({ title, message }: UiError): ShowError => ({
  type: SHOW_ERROR,
  payload: { title, message },
})

export const hideError = (): HideError => ({
  type: HIDE_ERROR,
})
