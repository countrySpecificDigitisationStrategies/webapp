import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { isLoggedIn } from 'features/authentication/store'

export const useLoginStatus = () => useSelector(isLoggedIn)

export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => {
      clearTimeout(handler)
    }
  }, [value])

  return debouncedValue
}
