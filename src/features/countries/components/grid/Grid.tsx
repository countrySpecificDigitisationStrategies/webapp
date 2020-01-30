import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, Typography } from '@material-ui/core'

import { Country } from 'features/countries/store'
import { useCountryData } from 'features/countries/components/hooks'
import { areCountriesLoaded, getCountries } from 'features/countries/store/selectors'
import { CountryCard, CountryCardProps } from 'features/countries/components/grid/Card'
import { sortByProperty } from 'shared/utils'

interface CountryGridProps {
  ids: Country['id'][]
  emptyMessage?: string
  cardLink: (country: Country['id']) => CountryCardProps['linkTo']
  cardTitle?: (country: Country['id']) => CountryCardProps['title']
}

export const CountryGrid = ({
  ids,
  emptyMessage = "Sorry, there's nothing here yet.",
  cardLink,
  cardTitle,
}: CountryGridProps) => {
  useCountryData()
  const countriesLoaded = useSelector(areCountriesLoaded)
  const countries = useSelector(getCountries)
  const filteredCountries = Object.values(countries).filter(country => ids.includes(country.id))
  sortByProperty(filteredCountries, country => country.name)

  if (!countriesLoaded) return null
  if (countriesLoaded && filteredCountries.length < 1) return <Typography>{emptyMessage}</Typography>

  return (
    <Grid
      className="DiscussionForumGrid"
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      spacing={2}>
      {filteredCountries.map(country => (
        <CountryCard
          key={country.id}
          country={country}
          linkTo={cardLink(country.id)}
          {...(cardTitle && { title: cardTitle(country.id) })}
        />
      ))}
    </Grid>
  )
}
