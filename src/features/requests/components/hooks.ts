import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CreateRequestReturnType, doesRequestExist } from 'features/requests/store'

export const loadIfNotLoaded = <T>(requestActionCreator: () => CreateRequestReturnType<T>) => {
  const action = requestActionCreator()
  const alreadyLoaded = useSelector(doesRequestExist(action.id))
  const dispatch = useDispatch()

  useEffect(() => {
    if (!alreadyLoaded) {
      dispatch(action)
    }
  }, [])
}
