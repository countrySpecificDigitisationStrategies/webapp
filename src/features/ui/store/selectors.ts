import { ApplicationState } from 'app/store/reducers'
import { UiState } from './types'

const getUiState = (state: ApplicationState): UiState => state.ui

export const isNavBarOpen = (state: ApplicationState) => getUiState(state).isNavBarOpen
export const getNotification = (state: ApplicationState) => getUiState(state).notification
export const hasNotification = (state: ApplicationState) => getNotification(state) != null
