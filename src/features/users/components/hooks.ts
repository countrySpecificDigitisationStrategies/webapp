import { loadIfNotLoaded } from 'features/requests'
import { loadAccount, loadBoards } from 'features/users/store'

export const useAccountData = () => loadIfNotLoaded(loadAccount)
export const useBoardData = () => loadIfNotLoaded(loadBoards)
