import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ApplicationState } from 'app/store/reducers'

import { CreateRequestReturnType } from 'features/requests/store'
import {
  UserResponse,
  AccountResponse,
  BoardResponse,
  loadAccount,
  loadBoards,
  isAccountLoaded,
  areBoardsLoaded,
} from 'features/users/store'

//TODO: Move duplicate code to request feature
const loadIfNotLoaded = <T extends AccountResponse | UserResponse[] | BoardResponse[]>(
  selector: (state: ApplicationState) => boolean,
  requestActionCreator: () => CreateRequestReturnType<T>
) => {
  const alreadyLoaded = useSelector(selector)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!alreadyLoaded) {
      dispatch(requestActionCreator())
    }
  }, [])
}

export const useAccountData = () => loadIfNotLoaded(isAccountLoaded, loadAccount)
export const useBoardData = () => loadIfNotLoaded(areBoardsLoaded, loadBoards)
