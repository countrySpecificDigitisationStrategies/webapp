import { CLOSE_NAV_BAR, HIDE_ERROR, OPEN_NAV_BAR, SHOW_ERROR, UiActionTypes } from './actions'
import { UiState } from './types'

const initialState: UiState = {
  isNavBarOpen: false,
  error: null,
}

export const ui = (state: UiState = initialState, action: UiActionTypes): UiState => {
  switch (action.type) {
    case OPEN_NAV_BAR:
      return { ...state, isNavBarOpen: true }
    case CLOSE_NAV_BAR:
      return { ...state, isNavBarOpen: false }
    case SHOW_ERROR:
      return { ...state, error: action.payload }
    case HIDE_ERROR:
      return { ...state, error: null }
    default:
      return state
  }
}
