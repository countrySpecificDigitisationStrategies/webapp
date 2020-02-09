import React from 'react'
import { useSelector } from 'react-redux'

import { Combobox as SharedCombobox, ComboboxProps as SharedComboboxProps } from 'shared/components'

import { areCountriesLoading, getCountries } from 'features/countries/store/selectors'
import { useCountryData } from 'features/countries/components/hooks'
import { Country } from 'features/countries/store/types'
import { sortByProperty } from 'shared/utils'

interface ComboboxProps
  extends Omit<SharedComboboxProps<Country>, 'options' | 'labelProperty' | 'idProperty' | 'loading' | 'label'> {
  label?: SharedComboboxProps<Country>['label']
}

export const Combobox = ({ label = 'Country', ...props }: ComboboxProps) => {
  useCountryData()
  const countries = useSelector(getCountries)
  const loading = useSelector(areCountriesLoading)

  return (
    <SharedCombobox<Country>
      options={sortByProperty(Object.values(countries), country => country.name)}
      labelProperty={'name'}
      idProperty={'id'}
      loading={loading}
      label={label}
      {...props}
    />
  )
}
