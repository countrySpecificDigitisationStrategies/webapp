import { ApplicationState } from 'app/store/reducers'
import { doesRequestExist, isRequestPending } from 'features/requests/store'

import { CountriesState, Country } from 'features/countries/store/types'
import { COUNTRIES_REQUEST_ID } from 'features/countries/store/actions'

export const getCountries = (state: ApplicationState): CountriesState => state.countries
export const getCountry = (id: Country['id']) => (state: ApplicationState) => getCountries(state)[id]
export const areCountriesLoaded = doesRequestExist(COUNTRIES_REQUEST_ID)
export const areCountriesLoading = isRequestPending(COUNTRIES_REQUEST_ID)
