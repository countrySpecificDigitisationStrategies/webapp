import React from 'react'

import { useSelector } from 'react-redux'
import { LoadingOverlay } from 'shared/components'
import { isAnyPending } from 'features/requests/store'

export const withLoadingOverlay = Component => props => {
  const loading = useSelector(isAnyPending)

  if (loading) {
    return (
      <LoadingOverlay>
        <Component {...props} />
      </LoadingOverlay>
    )
  } else {
    return <Component {...props} />
  }
}
