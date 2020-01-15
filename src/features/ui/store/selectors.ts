import { ApplicationState } from 'app/store/reducers'
import { UiState } from './types'

const getUiState = (state: ApplicationState): UiState => state.ui

export const isNavBarOpen = (state: ApplicationState) => getUiState(state).isNavBarOpen
export const getError = (state: ApplicationState) => getUiState(state).error
export const hasError = (state: ApplicationState) => getError(state) != null
