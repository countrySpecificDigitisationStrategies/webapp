import { useDispatch, useSelector } from 'react-redux'
import { getLoadingState, loadAll, loadingState } from '../store'
import { useEffect } from 'react'

export const useStrategyData = () => {
  const currentLoadingState = useSelector(getLoadingState)
  const dispatch = useDispatch()

  useEffect(() => {
    if (currentLoadingState === loadingState.none) {
      dispatch(loadAll())
    }
  }, [currentLoadingState])
}
