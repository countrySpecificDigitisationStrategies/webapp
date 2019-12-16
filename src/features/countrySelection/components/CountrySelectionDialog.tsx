import clsx from 'clsx'
import React from 'react'
import {
  Button,
  Container,
  createStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
  useTheme,
} from '@material-ui/core'

import { Country } from '../store/types'
import { Language } from '@material-ui/icons'
import { useCountries } from './hooks'
import { useSelector } from 'react-redux'
import { getCountries } from '../store/selectors'

export interface CountrySelectionDialogProps {
  initialSelected?: Country
  open: boolean
  onClose: (selectedCountry?: Country) => void
}

const usePaperStyles = makeStyles(() =>
  createStyles({
    paper: {
      width: '80%',
      maxHeight: 435,
    },
  })
)

const useNoCountryFlagStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '32px',
      minWidth: '32px',
      height: '22px',
      background: theme.palette.primary.main,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '0 !important',
      fontSize: '16px',
      color: '#fff',
    },
  })
)

const useNoCountryFlagIconStyles = makeStyles(() =>
  createStyles({
    root: {
      minWidth: '48px',
    },
  })
)

export function CountrySelectionDialog(props: CountrySelectionDialogProps) {
  const { initialSelected, open, onClose } = props
  const theme = useTheme()
  const paperClasses = usePaperStyles()
  const noCountryFlagClasses = useNoCountryFlagStyles(theme)
  const useNoCountryFlagIconClasses = useNoCountryFlagIconStyles()

  useCountries()

  const countries = useSelector(getCountries)
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
        className={clsx('country-selection__no-country', {
          'country-selection__no-country--selected': selected === null,
        })}
        onClick={handleSelect(null)}>
        <ListItemIcon classes={useNoCountryFlagIconClasses}>
          <Container disableGutters classes={noCountryFlagClasses} className="country-selection__no-country__flag">
            <Language fontSize="inherit" color="inherit" />
          </Container>
        </ListItemIcon>
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
    <Dialog open={open} onClose={handleCancel} classes={paperClasses} maxWidth="xs" keepMounted>
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
