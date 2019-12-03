import clsx from 'clsx'
import React from 'react'
import {
  Button,
  createStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from '@material-ui/core'

import { getCountries } from '../../../service/countries'
import { Country } from '../store/types'

export interface CountrySelectionDialogProps {
  initialSelected?: Country
  open: boolean
  onClose: (selectedCountry?: Country) => void
}

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      width: '80%',
      maxHeight: 435,
    },
  })
)

export function CountrySelectionDialog(props: CountrySelectionDialogProps) {
  const { initialSelected, open, onClose } = props
  const classes = useStyles()

  const countries = getCountries()
  countries.sort((a: Country, b: Country): number => {
    const countryA = a.name.toUpperCase()
    const countryB = b.name.toUpperCase()
    if (countryA < countryB) return -1
    if (countryA > countryB) return 1
    return 0
  })

  const [selected, setSelected] = React.useState(initialSelected)

  const handleSelect = (newSelected?: Country): void => (event: Event) => {
    event.preventDefault()
    setSelected(newSelected)
  }

  const handleOk = () => {
    onClose(selected)
  }

  const handleCancel = () => {
    setSelected(initialSelected)
    onClose()
  }

  const createCountryOptions = (countries: Country[], selected?: Country): JSX.Element => {
    const noCountryOption: JSX.Element = (
      <ListItem
        button
        className={clsx('country-selection__item', { 'country-selection__item--selected': selected === null })}
        onClick={handleSelect(null)}>
        <img
          className="country-selection__item__flag"
          src="https://image.flaticon.com/icons/svg/555/555633.svg" //TODO change URL to icon url from server
          alt={'united nations flag'}
          height="32px"
        />
        <ListItemText primary="No Country" />
      </ListItem>
    )
    return (
      <>
        {noCountryOption}
        {countries.map((country: Country) => (
          <ListItem
            key={'country' + country.id}
            button
            className={clsx('country-selection__item', {
              'country-selection__item--selected': selected ? country.id === selected.id : false,
            })}
            onClick={handleSelect(country)}>
            <img
              className="country-selection__item__flag"
              src={country.flagRectangleURL}
              alt={'Flag of ' + country.name}
              height="32px"
            />
            <ListItemText primary={country.name} />
          </ListItem>
        ))}
      </>
    )
  }

  return (
    <Dialog open={open} onClose={handleCancel} classes={classes} maxWidth="xs" keepMounted>
      <DialogTitle>Select a Country</DialogTitle>
      <DialogContent dividers>
        <List>{createCountryOptions(countries, selected)}</List>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleOk} color="primary">
          Select
        </Button>
      </DialogActions>
    </Dialog>
  )
}
