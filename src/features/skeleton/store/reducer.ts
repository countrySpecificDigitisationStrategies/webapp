import { CLOSE_NAV_BAR, OPEN_NAV_BAR, SkeletonAction } from './actions'
import { SkeletonState } from './types'

const initialState: SkeletonState = {
  isNavBarOpen: false,
}

export const skeleton = (state: SkeletonState = initialState, action: SkeletonAction): SkeletonState => {
  switch (action.type) {
    case OPEN_NAV_BAR:
      return {
        ...state,
        isNavBarOpen: true,
      }
    case CLOSE_NAV_BAR:
      return {
        ...state,
        isNavBarOpen: false,
      }
    default:
      return state
  }
}
