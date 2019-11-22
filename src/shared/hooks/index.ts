import { useSelector } from 'react-redux'
import { isLoggedIn } from '../../features/authentication/store'

export const useLoginStatus = () => useSelector(isLoggedIn)
