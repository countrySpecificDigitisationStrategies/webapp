import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getNotification, hideNotification } from 'features/ui/store'
import { Notification } from 'shared/components'

export const withNotification = <P extends object>(Component: React.ComponentType<P>) => (props: P): JSX.Element => {
  const notification = useSelector(getNotification)
  const dispatch = useDispatch()

  if (notification) {
    const { type, title, message } = notification
    return (
      <>
        <Notification
          type={type}
          message={title && message ? `${title}: ${message}` : title || message}
          onClose={() => {
            dispatch(hideNotification())
          }}
        />
        <Component {...props} />
      </>
    )
  } else {
    return <Component {...props} />
  }
}
