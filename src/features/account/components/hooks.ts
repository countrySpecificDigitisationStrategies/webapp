import { loadIfNotLoaded } from 'features/requests'
import { loadAccount } from 'features/account/store'

export const useAccountData = () => loadIfNotLoaded(loadAccount)
