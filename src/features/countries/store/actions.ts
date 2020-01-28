import { Endpoint, get } from 'app/service'
import { createRequest } from 'features/requests/store'

import { Country } from './types'
import { CountryResponse } from './types.api'

export const COUNTRIES_REQUEST_ID = 'countries'
export const COUNTRIES_ADD = 'countries/add'

interface AddCountries {
  type: typeof COUNTRIES_ADD
  payload: Country[]
}

export type CountryActions = AddCountries

export const addCountries = (countries: Country[]): AddCountries => ({
  type: COUNTRIES_ADD,
  payload: countries,
})

export const loadCountries = () =>
  createRequest<CountryResponse[]>({
    id: COUNTRIES_REQUEST_ID,
    request: () => get(Endpoint.countries),
    onSuccess: data => addCountries(transformResponseData(data)),
  })

const transformResponseData = (countries: CountryResponse[]): Country[] =>
  countries.map(country => ({
    ...country,
  }))
