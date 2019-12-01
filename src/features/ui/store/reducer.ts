import {
  CLOSE_NAV_BAR,
  HIDE_ERROR,
  HIDE_LOADING,
  OPEN_NAV_BAR,
  SHOW_ERROR,
  SHOW_LOADING,
  UiActionTypes,
} from './actions'
import { UiState } from './types'

const initialState: UiState = {
  isNavBarOpen: false,
  error: null,
  isLoading: false,
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
    case SHOW_LOADING:
      return { ...state, isLoading: true }
    case HIDE_LOADING:
      return { ...state, isLoading: false }
    default:
      return state
  }
}
