import { Country } from './types'

export const COUNTRY_SELECT = 'countries/select'

interface SelectCountry {
  type: typeof COUNTRY_SELECT
  newCountry?: Country
}

export type CountriesAction = SelectCountry

export const selectCountry = (newCountry?: Country): SelectCountry => ({
  type: COUNTRY_SELECT,
  newCountry: newCountry,
})
