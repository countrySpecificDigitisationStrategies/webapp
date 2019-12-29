import { doesRequestExist } from '../../requests/store'
import { COUNTRIES_REQUEST_ID } from './actions'
import { Country } from './types'
import { ApplicationState } from '../../../app/store/reducers'

export const selectedCountry = (state: ApplicationState) => state.countries.selected

export const getCountries = (state: ApplicationState): Country[] | null | undefined => state.countries.countries
export const areCountriesLoaded = (state: ApplicationState): boolean => doesRequestExist(COUNTRIES_REQUEST_ID)(state)
