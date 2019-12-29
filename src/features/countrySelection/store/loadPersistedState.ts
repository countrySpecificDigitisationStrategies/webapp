import { DeepPartial } from 'redux'

import { getSelectedCountryToken } from 'app/service'
import { ApplicationState } from 'app/store/reducers'

const loadCountry = (): DeepPartial<ApplicationState> => {
  const selectedCountryToken = getSelectedCountryToken()
  const selectedCountry = selectedCountryToken ? JSON.parse(selectedCountryToken) : null
  return {
    countries: { selected: selectedCountry },
  }
}

export default loadCountry
