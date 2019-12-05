import React from 'react'

import { useSelector } from 'react-redux'
import { isLoading } from 'features/ui/store'
import { LoadingOverlay } from 'shared/components'

export const withLoadingOverlay = Component => props => {
  const loading = useSelector(isLoading)

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
