import React from 'react'
import { useSelector } from 'react-redux'

import { Combobox as SharedCombobox } from 'shared/components/combobox/Combobox'

import { areCountriesLoading, getCountries } from 'features/countries/store/selectors'
import { useCountryData } from 'features/countries/components/hooks'
import { Country } from 'features/countries/store/types'
import { sortByProperty } from 'shared/utils'

export const Combobox = () => {
  useCountryData()
  const countries = useSelector(getCountries)
  const loading = useSelector(areCountriesLoading)

  return (
    <SharedCombobox<Country>
      options={sortByProperty(Object.values(countries), country => country.name)}
      labelProperty={'name'}
      idProperty={'id'}
      loading={loading}
      label="Country"
    />
  )
}
