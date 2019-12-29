import { store } from 'app/store'
import { setSelectedCountryToken } from 'app/service'
import { selectedCountry } from 'features/countrySelection/store/selectors'
import { Country } from 'features/countrySelection/store/types'

let currCountry: Country | null = null
const saveCountry = () => {
  const prevCountry = currCountry

  const state = store.getState()
  currCountry = selectedCountry(state)

  if (prevCountry !== currCountry) setSelectedCountryToken(JSON.stringify(currCountry))
}

export default saveCountry
