import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadUserProfile, UserProfile } from '../store'
import { CreateRequestReturnType } from 'features/requests/store'

const loadIfNotLoaded = <T extends UserProfile[]>(requestActionCreator: () => CreateRequestReturnType<T>) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(requestActionCreator())
  }, [])
}

export const useUserProfileData = () => loadIfNotLoaded(loadUserProfile)
