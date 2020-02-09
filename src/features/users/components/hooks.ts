import { loadIfNotLoaded } from 'features/requests'
import { loadBoards } from 'features/users/store'

export const useBoardData = () => loadIfNotLoaded(loadBoards)
