import { CountriesState } from './types'
import { getCountries, getSelectedCountry } from '../../../service/countries'
import { CountriesAction, COUNTRY_SELECT } from './actions'

const initialState: CountriesState = {
  selected: getSelectedCountry(),
  countries: getCountries(),
}

export const countries = (state: CountriesState = initialState, action: CountriesAction): CountriesState => {
  switch (action.type) {
    case COUNTRY_SELECT:
      return {
        ...state,
        selected: action.newCountry,
      }
    default:
      return state
  }
}
