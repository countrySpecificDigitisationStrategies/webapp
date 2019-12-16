import { doesRequestExist } from '../../requests/store'
import { COUNTRIES_REQUEST_ID, SELECTED_COUNTRY_REQUEST_ID } from './actions'
import { Country } from './types'

export const selectedCountry = state => state.countries.selected

const slice = 'countries'

const getAll = <T>(key: string) => <T>(state): T[] | null | undefined => state[slice][key]
const isLoaded = (requestId: string) => (state): boolean => doesRequestExist(requestId)(state)

export const getCountries = getAll<Country>('countries')
export const areCountriesLoaded = isLoaded(COUNTRIES_REQUEST_ID)

// export const isSelectedCountryLoaded = isLoaded(SELECTED_COUNTRY_REQUEST_ID)
