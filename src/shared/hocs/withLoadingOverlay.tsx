import React from 'react'

import { useSelector } from 'react-redux'
import { LoadingOverlay } from 'shared/components'
import { isAnyPending } from 'features/requests/store'

export const withLoadingOverlay = <P extends object>(Component: React.ComponentType<P>) => (props: P): JSX.Element => {
  const loading = useSelector(isAnyPending)

  return (
    <LoadingOverlay active={loading}>
      <Component {...props} />
    </LoadingOverlay>
  )
}
