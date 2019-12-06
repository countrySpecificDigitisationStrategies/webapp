import { useDispatch, useSelector } from 'react-redux'
import { areStrategiesLoaded, loadAll } from '../store'
import { useEffect } from 'react'

export const useStrategyData = () => {
  const alreadyLoaded = useSelector(areStrategiesLoaded)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!alreadyLoaded) {
      dispatch(loadAll())
    }
  }, [])
}
