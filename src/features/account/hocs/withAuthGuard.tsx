import React from 'react'

import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'

import { APP_ROUTES } from 'app/routes'
import { isLoggedIn } from 'features/account/store'

interface AuthGuardProps {
  publicOnly?: boolean
  redirectRoute?: string
}

export const withAuthGuard = <P extends object>(
  Component: React.ComponentType<P>,
  { publicOnly = false, redirectRoute }: AuthGuardProps = {}
) => (props: P): JSX.Element => {
  const loggedIn = useSelector(isLoggedIn)
  const accessDenied = publicOnly ? loggedIn : !loggedIn

  if (accessDenied) {
    return <Redirect to={redirectRoute || APP_ROUTES.home} />
  } else {
    return <Component {...props} />
  }
}
