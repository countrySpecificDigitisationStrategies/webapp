import { CountriesState } from 'features/countries/store/types'
import { COUNTRIES_ADD, CountryActions } from 'features/countries/store/actions'
import { toIndexedObject } from 'shared/utils'

const initialState: CountriesState = {}

export const countriesReducer = (state: CountriesState = initialState, action: CountryActions): CountriesState => {
  switch (action.type) {
    case COUNTRIES_ADD:
      return {
        ...state,
        ...toIndexedObject(action.payload, 'id'),
      }
    default:
      return state
  }
}
