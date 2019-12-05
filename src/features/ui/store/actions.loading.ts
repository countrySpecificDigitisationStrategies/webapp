export const SHOW_LOADING = 'ui/loading/show'
export const HIDE_LOADING = 'ui/loading/hide'

interface ShowLoading {
  type: typeof SHOW_LOADING
}

interface HideLoading {
  type: typeof HIDE_LOADING
}

export type LoadingAction = ShowLoading | HideLoading

export const showLoading = (): ShowLoading => ({
  type: SHOW_LOADING,
})

export const hideLoading = (): HideLoading => ({
  type: HIDE_LOADING,
})
