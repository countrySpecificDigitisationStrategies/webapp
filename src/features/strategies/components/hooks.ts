import { useDispatch, useSelector } from 'react-redux'
import { areStrategiesLoaded, loadAll } from '../store'
import { useEffect } from 'react'

//TODO: this is very ugly --> loading management should be handled globally by middleware & possibly another reducer
let requestPending = false

export const useStrategyData = () => {
  const alreadyLoaded = useSelector(areStrategiesLoaded)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!alreadyLoaded && !requestPending) {
      requestPending = true
      dispatch(loadAll())
    }
  }, [])
}
