export const isNavBarOpen = state => state.ui.isNavBarOpen
export const getError = state => state.ui.error
export const hasError = state => getError(state) != null