import { CLOSE_NAV_BAR, HIDE_NOTIFICATION, OPEN_NAV_BAR, SHOW_NOTIFICATION, UiActionTypes } from './actions'
import { UiState } from './types'

const initialState: UiState = {
  isNavBarOpen: false,
  notification: null,
}

export const ui = (state: UiState = initialState, action: UiActionTypes): UiState => {
  switch (action.type) {
    case OPEN_NAV_BAR:
      return { ...state, isNavBarOpen: true }
    case CLOSE_NAV_BAR:
      return { ...state, isNavBarOpen: false }
    case SHOW_NOTIFICATION:
      return { ...state, notification: action.payload }
    case HIDE_NOTIFICATION:
      return { ...state, notification: null }
    default:
      return state
  }
}
