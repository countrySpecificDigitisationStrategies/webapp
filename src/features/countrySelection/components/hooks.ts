import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { areCountriesLoaded, isSelectedCountryLoaded } from '../store/selectors'
import { loadCountries } from '../store/actions'

const loadIfNotLoaded = (selector, requestActionCreator) => {
  const alreadyLoaded = useSelector(selector)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!alreadyLoaded) {
      dispatch(requestActionCreator())
    }
  }, [])
}

export const useCountries = () => loadIfNotLoaded(areCountriesLoaded, loadCountries)
// export const useSelectedCountry = () => loadIfNotLoaded(isSelectedCountryLoaded, loadSelectedCountry)
