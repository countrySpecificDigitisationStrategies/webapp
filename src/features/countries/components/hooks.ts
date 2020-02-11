import { loadIfNotLoaded } from 'features/requests'
import { loadCountries } from 'features/countries/store'

export const useCountryData = () => loadIfNotLoaded(loadCountries)
