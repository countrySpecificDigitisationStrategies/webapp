export type SelectedCountryToken = string
const SELECTED_COUNTRY_STORAGE_KEY = 'selectedCountry'

export const setSelectedCountryToken = (token: SelectedCountryToken): void => {
  window.localStorage.setItem(SELECTED_COUNTRY_STORAGE_KEY, token)
}

export const getSelectedCountryToken = (): SelectedCountryToken | null =>
  window.localStorage.getItem(SELECTED_COUNTRY_STORAGE_KEY)
