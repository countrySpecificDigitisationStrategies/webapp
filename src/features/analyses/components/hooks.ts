import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { areAnalysesLoaded, loadAnalyses } from '../store'

const loadIfNotLoaded = (selector, requestActionCreator) => {
  const alreadyLoaded = useSelector(selector)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!alreadyLoaded) {
      dispatch(requestActionCreator())
    }
  }, [])
}

export const useAnalysesData = () => loadIfNotLoaded(areAnalysesLoaded, loadAnalyses)
