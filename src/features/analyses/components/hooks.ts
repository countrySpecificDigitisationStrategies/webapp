import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { areAnalysesLoaded, loadAnalyses, Analysis } from '../store'
import { ApplicationState } from 'app/store/reducers'
import { RequestStart } from 'features/requests/store'

const loadIfNotLoaded = <T extends Analysis[]>(
  selector: (state: ApplicationState) => boolean,
  requestActionCreator: () => RequestStart<T>
) => {
  const alreadyLoaded = useSelector(selector)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!alreadyLoaded) {
      dispatch(requestActionCreator())
    }
  }, [])
}

export const useAnalysesData = () => loadIfNotLoaded(areAnalysesLoaded, loadAnalyses)
