import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ApplicationState } from 'app/store/reducers'

import { CreateRequestReturnType } from 'features/requests/store'
import { areCountriesLoaded, loadCountries, CountryResponse } from 'features/countries/store'

//TODO: Move duplicate code to request feature
const loadIfNotLoaded = <T extends CountryResponse[]>(
  selector: (state: ApplicationState) => boolean,
  requestActionCreator: () => CreateRequestReturnType<T>
) => {
  const alreadyLoaded = useSelector(selector)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!alreadyLoaded) {
      dispatch(requestActionCreator())
    }
  }, [])
}

export const useCountryData = () => loadIfNotLoaded(areCountriesLoaded, loadCountries)
