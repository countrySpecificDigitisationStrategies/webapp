import { store } from 'app/store'
import saveCountry from 'features/countrySelection/store/subscription'

const subscribeStateListener = (): void => {
  store.subscribe((): void => {
    saveCountry()
  })
}

export default subscribeStateListener
