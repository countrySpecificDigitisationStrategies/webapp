import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getError, hideError, UiError } from 'features/ui/store'
import { Notification, NotificationType } from 'shared/components'

export const withErrorNotification = Component => props => {
  const error: UiError = useSelector(getError)
  const dispatch = useDispatch()

  if (error) {
    return (
      <>
        <Notification
          type={NotificationType.error}
          message={`${error.title}: ${error.message}`}
          onClose={() => {
            dispatch(hideError())
          }}
        />
        <Component {...props} />
      </>
    )
  } else {
    return <Component {...props} />
  }
}
