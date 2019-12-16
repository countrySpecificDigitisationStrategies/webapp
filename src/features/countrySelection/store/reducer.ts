import { CountriesState } from './types'
import { COUNTRIES_ADD, CountriesAction, COUNTRY_SELECT } from './actions'

const initialState: CountriesState = {
  selected: null, // getSelectedCountry(),
  countries: [], // getCountries(),
}

export const countries = (state: CountriesState = initialState, action: CountriesAction): CountriesState => {
  switch (action.type) {
    case COUNTRIES_ADD:
      return {
        ...state,
        countries: action.countries,
      }
    case COUNTRY_SELECT:
      return {
        ...state,
        selected: action.newCountry,
      }
    default:
      return state
  }
}
