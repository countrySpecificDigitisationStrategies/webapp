import { Country, CountryResponseItem } from './types'
import { createRequest } from '../../requests/store'
import { Endpoints, get } from '../../../app/service'

export const COUNTRIES_REQUEST_ID = 'countries'
// export const SELECTED_COUNTRY_REQUEST_ID = 'selected/country'
export const COUNTRIES_ADD = 'countries/add'
export const COUNTRY_SELECT = 'countries/select'
// export const USER_INFO_REQUEST_ID = 'users/me'

interface SelectCountry {
  type: typeof COUNTRY_SELECT
  newCountry?: Country
}

interface AddCountries {
  type: typeof COUNTRIES_ADD
  countries: Country[]
}

export type CountriesAction = SelectCountry | AddCountries

export const loadCountries = () =>
  createRequest({
    id: COUNTRIES_REQUEST_ID,
    request: () => get(Endpoints.countries),
    onSuccess: addCountries,
    onError: () => console.log('Error'),
  })

const addCountries = (response: CountryResponseItem[]): AddCountries => {
  const countries: Country[] = response.map(item => ({
    id: item.id,
    name: item.name,
    flagCircleURL: item.flag_circle,
    flagRectangleURL: item.flag_rectangle,
  }))
  return {
    type: COUNTRIES_ADD,
    countries,
  }
}

// export const loadSelectedCountry = () =>
//   createRequest({
//     id: USER_INFO_REQUEST_ID,
//     request: () => get(Endpoints.user),
//     onSuccess: createRequest({
//       id: SELECTED_COUNTRY_REQUEST_ID,
//       request: () => get(Endpoints.countries, ),
//       onSuccess: addSelectedCountry,
//     }),
//   })

// const requestSelectedCountry = (user: )
//
// const addSelectedCountry = () =>

export const selectCountry = (newCountry?: Country): SelectCountry => ({
  type: COUNTRY_SELECT,
  newCountry: newCountry,
})
